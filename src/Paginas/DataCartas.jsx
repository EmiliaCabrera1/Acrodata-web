import CardChica from "../Componentes/CardChica";
import CardDetalle from "../Componentes/CardDetalle";
import FiltroDificultad from "../Componentes/FiltroDificultad";
import useAcrocartas from "../Hooks/useAcrocartas";
import { useState } from "react";

const DataCartas = () => {
  const cards = useAcrocartas();
  const [selectedCard, setSelectedCard] = useState(null);
  const [dificultadValue, setDificultadValue] = useState("Todas");
  const [filtroTexto, setFiltroTexto] = useState("");

  return (
    <div className="w-full h-full flex flex-col p-4 mr-1 ">
      <h2 className="font-family-titulo text-[25px] text-[#36463E] mx-4 mt-1 mb-1">
        DATA CARTAS
      </h2>
      <div className="flex w-full justify-end">
        <div className="flex items-center ml-8 w-[80dvg] mb-6 bg-fondo-claro p-2 rounded-xl shadow-custom-shadow">
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
      <div className="flex flex-row h-full justify-end gap-2">
        <FiltroDificultad
          value={dificultadValue}
          setValue={setDificultadValue}
        />
        <div className="flex flex-row max-h-full flex-wrap overflow-y-auto gap-4 pb-4 content-start">
          {cards.length > 0 ? (
            cards
              .filter((card) => {
                if (
                  filtroTexto !== "" &&
                  !card.nombre.toLowerCase().includes(filtroTexto.toLowerCase())
                )
                  return false;
                if (dificultadValue === "Todas") return true;
                return card.dificultad === dificultadValue.toLowerCase();
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
            <CardDetalle
              card={selectedCard}
              onClick={() => setSelectedCard(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DataCartas;
