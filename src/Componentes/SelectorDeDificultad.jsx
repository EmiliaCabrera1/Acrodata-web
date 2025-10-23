import { useState } from "react";
import Checkbox from "../Componentes/Checkbox";
import { useEffect } from "react";
import useJuego from "../Hooks/useJuego";

const SelectorDeDificultad = ({ setEtapa }) => {
  const [selectedDificultades, setSelectedDificultades] = useState([]);
  const { setDificultad, iniciarJuego } = useJuego();

  const handleDificultad = (selectedDificultades) => {
    if (selectedDificultades.length === 0) {
      alert("Selecciona al menos una dificultad");
      return;
    }
    const dificultad = selectedDificultades.filter((d) => d !== "todas");
    setDificultad(dificultad);
    iniciarJuego();
    setEtapa(1);
  };

  const dificultades = [
    { name: "principiante", label: "PRINCIPIANTE" },
    { name: "intermedio", label: "INTERMEDIO" },
    { name: "avanzado", label: "AVANZADO" },
    { name: "todas", label: "TODAS" },
  ];

  const toggleDificultad = (name) => {
    setSelectedDificultades((prev) =>
      prev.includes(name)
        ? [...prev.filter((d) => d !== name)]
        : [...prev, name]
    );
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
    <div className="sm:flex-row text-center">
      <h1 className="text-verde-oscuro font-family-titulo text-[26px] hidden sm:text-left sm:flex sm:ml-14">
        DATA JUEGO
      </h1>
      <h1 className="text-verde-oscuro mb-7 text-center sm:flex sm:ml-14">
        SELECCIONA LA DIFICULTAD DE TUS CARTAS
      </h1>
      <div className="flex justify-center items-center sm:items-left">
        <div className="inline-flex flex-col gap-3 sm:flex sm:flex-row">
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
      </div>
      <div>
        <button
          className="mt-6 w-72 h-12 text-verde-oscuro bg-fondo-claro rounded-[10px] shadow-custom-shadow sm:w-50 sm:mb-8 cursor-pointer"
          onClick={() => handleDificultad(selectedDificultades)}
        >
          ELEGIR 5 CARTAS
        </button>
        <div className="flex justify-center sm:hidden">
          <img
            className="h-70 w-full max-w-md object-contain"
            src="/img/fondoJuegoNuevo.svg"
            alt="Fondo"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectorDeDificultad;
