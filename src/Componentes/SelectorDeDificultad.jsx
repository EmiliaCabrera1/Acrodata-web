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
    console.log("Dificultades seleccionadas:", dificultad);
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
    <div className="h-full">
      <h1 className="text-verde-oscuro mt-8 mb-7 text-center">
        SELECCIONA LA DIFICULTAD DE TUS CARTAS
      </h1>
      <div className="justify-center items-center flex">
        <div className="flex-col gap-3 inline-flex">
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
      <div className="flex flex-col items-center">
        <button
          className="mt-6 w-72 h-12 text-verde-oscuro bg-fondo-claro rounded-[10px] shadow-custom-shadow"
          onClick={() => handleDificultad(selectedDificultades)}
        >
          ELEGIR 5 CARTAS
        </button>
      </div>
      <img
        className="absolute h-2/3 w-full -bottom-2 left-0 -z-10 object-fit"
        src="/img/fondoJuegoNuevo.svg"
        alt="Fondo"
      />
    </div>
  );
};

export default SelectorDeDificultad;
