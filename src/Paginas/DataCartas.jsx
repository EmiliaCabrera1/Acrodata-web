import { twMerge } from "tailwind-merge";
import CardChica from "../Componentes/CardChica";
import CardDetalle from "../Componentes/CardDetalle";
import FiltroDificultad from "../Componentes/FiltroDificultad";
import DataCartasLayout from "../Componentes/Layout/DataCartasLayout";
import useAcrocartas from "../Hooks/useAcrocartas";
import { useState } from "react";

const DataCartas = () => {
  const cards = useAcrocartas();
  const [selectedCard, setSelectedCard] = useState(null);
  const [dificultadValue, setDificultadValue] = useState("Todas");
  const [filtroTexto, setFiltroTexto] = useState("");

  const Filtro = () => {
    return (
      <FiltroDificultad value={dificultadValue} setValue={setDificultadValue} />
    );
  };

  const Cartas = () => {
    return (
      <>
        {cards.length > 0 ? (
          cards
            .filter((card) => {
              if (
                filtroTexto !== "" &&
                !card.nombre.toLowerCase().includes(filtroTexto.toLowerCase())
              )
                return false;
              if (dificultadValue === "Todas") return true;
              return (
                card.dificultad.toLowerCase() === dificultadValue.toLowerCase()
              );
            })
            .map((card, idx) => {
              return (
                <CardChica
                  key={idx}
                  card={card}
                  onClick={() => setSelectedCard(card)}
                />
              );
            })
        ) : (
          <h1 className="w-full h-full mx-auto mt-8">Cargando...</h1>
        )}
        {selectedCard && (
          <div className="flex z-80 fixed sm:hidden inset-0 h-[100vh] my-auto items-center justify-center  bg-[rgba(95,111,102,0.4)] w-full">
            <CardDetalle
              card={selectedCard}
              onClick={() => setSelectedCard(null)}
            />
          </div>
        )}
      </>
    );
  };
  const Detalle = () => {
    return (
      <>
        <div className="hidden sm:flex sm:ml-4 h-[60vh] mt-4">
          {selectedCard && (
            <CardDetalle
              card={selectedCard}
              onClick={() => setSelectedCard(null)}
            />
          )}
          {!selectedCard && (
            <img className="" src={"/img/cardPCespalda.svg"} alt="card" />
          )}
        </div>
      </>
    );
  };

  return (
    <div className="mb-20">
      <h2 className="font-family-titulo text-[25px] sm:text-[35px] text-[#36463E] mx-4 mt-1 mb-1">
        DATA CARTAS
      </h2>
      <div className="flex w-full justify-end pr-4 sm:pr-8">
        <div className="flex items-center  ml-8 w-[80vw] mb-6 bg-fondo-claro p-2 rounded-xl shadow-custom-shadow">
          <img
            src="/img/lupa.svg"
            alt="Buscar"
            className="w-4 h-4 opacity-60 mr-2"
          />
          <input
            name="filtro"
            placeholder="Escribe el nombre de una postura"
            className="bg-transparent outline-none flex-1 text-sm"
            onChange={(e) => setFiltroTexto(e.target.value)}
          />
        </div>
      </div>
      <DataCartasLayout Filtro={Filtro} Cartas={Cartas} Detalle={Detalle} />
    </div>
  );
};

export default DataCartas;
