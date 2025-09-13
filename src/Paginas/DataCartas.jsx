import CardChica from "../Componentes/CardChica";
import CardDetalle from "../Componentes/CardDetalle";
import useAcrocartas from "../Hooks/useAcrocartas";
import { useState } from "react";

const DataCartas = () => {
  const cards = useAcrocartas();
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="flex flex-wrap flex-row gap-4 my-6">
      {cards.length > 0 ? (
        cards.map((card, idx) => {
          return (
            <CardChica
              key={idx}
              card={card}
              onClick={() => setSelectedCard(card)}
            />
          );
        })
      ) : (
        <h1>No DATA</h1>
      )}
      {selectedCard && (
        <CardDetalle
          card={selectedCard}
          onClick={() => setSelectedCard(null)}
        />
      )}
    </div>
  );
};

export default DataCartas;
