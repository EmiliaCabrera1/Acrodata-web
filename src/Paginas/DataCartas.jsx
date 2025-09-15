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
    <div className="w-full h-full flex flex-col p-4">
      <input
        name="filtro"
        placeholder="Escribe el nombre de una postura"
        className="bg-fondo-claro p-2 rounded-xl shadow-custom-shadow mb-4"
        onChange={(e) => setFiltroTexto(e.target.value)}
      />
      <div className="flex flex-row w-full h-full">
        <FiltroDificultad
          value={dificultadValue}
          setValue={setDificultadValue}
        />
        <div className="flex flex-row w-2/3 max-h-full flex-wrap overflow-y-auto gap-4 pb-4 content-start">
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
