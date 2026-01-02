import { useState } from "react";
import Checkbox from "../Componentes/Checkbox";
import { useEffect } from "react";
import useJuego from "../Hooks/useJuego";
import PopUpError from "./PopUpError";

const SelectorDeDificultad = ({ setEtapa }) => {
  const [selectedDificultades, setSelectedDificultades] = useState([]);
  const { setDificultad, iniciarJuego } = useJuego();
  const [showError, setShowError] = useState(false);

  const handleDificultad = (selectedDificultades) => {
    if (selectedDificultades.length === 0) {
      setShowError(true);
      return;
    }
    const dificultad = selectedDificultades.filter((d) => d !== "todas");
    setDificultad(dificultad);
    iniciarJuego(dificultad);
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
      <h2 className="text-verde-oscuro font-family-titulo text-[26px] hidden sm:text-left sm:flex sm:pl-4">
        DATA JUEGO
      </h2>
      <h2 className="text-verde-oscuro mb-7 text-center sm:text-left sm:flex sm:pl-4">
        SELECCIONA LA DIFICULTAD DE TUS CARTAS
      </h2>
      {showError && (
        <PopUpError
          mensaje="Debes seleccionar al menos una dificultad"
          onClick={() => setShowError(false)}
        />
      )}
      <div className="flex justify-center items-center sm:items-start sm:justify-start sm:pl-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {dificultades.map((dificultad) => (
            <div key={dificultad.name} className="flex items-center gap-3">
              <Checkbox
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
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center">
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
