import { useState } from "react";
import Checkbox from "../Componentes/Checkbox";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useJuego from "../Hooks/useJuego";

const dificultades = [
  { name: "principiante", label: "PRINCIPIANTE" },
  { name: "intermedio", label: "INTERMEDIO" },
  { name: "avanzado", label: "AVANZADO" },
  { name: "todas", label: "TODAS" },
];

const JuegoNuevo = () => {
  const [selectedDificultades, setSelectedDificultades] = useState([]);
  const { setDificultad, iniciarJuego } = useJuego();
  const navegar = useNavigate();

  const toggleDificultad = (name) => {
    setSelectedDificultades((prev) =>
      prev.includes(name)
        ? [...prev.filter((d) => d !== name)]
        : [...prev, name]
    );
  };

  const juego = () => {
    if (selectedDificultades.length === 0) {
      alert("Selecciona al menos una dificultad");
      return;
    }
    const dificultad = selectedDificultades.filter((d) => d !== "todas");
    setDificultad(dificultad);
    iniciarJuego();
    navegar("/juego");
  };

  useEffect(() => {
    if (
      selectedDificultades.includes("principiante") &&
      selectedDificultades.includes("intermedio") &&
      selectedDificultades.includes("avanzado")
    ) {
      if (!selectedDificultades.includes("todas")) toggleDificultad("todas");
    } else {
      if (selectedDificultades.includes("todas")) {
        setSelectedDificultades((prev) => prev.filter((d) => d !== "todas"));
      }
    }
  }, [selectedDificultades]);

  return (
    <div className="relative h-full overflow-hidden">
      <h1 className="text-verde-oscuro mt-8 mb-7 text-center">
        SELECCIONA LA DIFICULTAD DE TUS CARTAS
      </h1>
      <div className="flex flex-col gap-3 justify-center">
        {dificultades.map((dificultad) => (
          <Checkbox
            key={dificultad.name}
            name={dificultad.name}
            label={dificultad.label}
            checked={selectedDificultades.includes(dificultad.name)}
            setChecked={() => {
              if (dificultad.name === "todas") {
                if (selectedDificultades.includes("todas")) {
                  setSelectedDificultades([]);
                } else {
                  setSelectedDificultades(dificultades.map((d) => d.name));
                }
              } else {
                toggleDificultad(dificultad.name);
              }
            }}
          />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <button
          className="mt-6 w-72 h-12 text-verde-oscuro bg-fondo-claro rounded-[10px] shadow-custom-shadow"
          onClick={() => {
            juego();
          }}
        >
          ELEGIR 5 CARTAS
        </button>
      </div>
      <img
        className="absolute h-auto max-h-2/3 w-full -bottom-2 left-0 -z-10 object-fit"
        src="/img/fondoJuegoNuevo.svg"
        alt="Fondo"
      />
    </div>
  );
};

export default JuegoNuevo;
