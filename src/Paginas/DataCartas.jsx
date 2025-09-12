import CardChica from "../Componentes/CardChica";
import useAcrocartas from "../Hooks/useAcrocartas";

const DataCartas = () => {
  const cards = useAcrocartas();

  return (
    <div className="flex flex-wrap flex-row gap-4 overflow-y-scroll h-full my-6">
      {cards.length > 0 ? (
        cards.map((card, idx) => {
          return (
            <CardChica
              key={idx}
              idArchivo={card.file}
              nombre={card.nombre}
              onClick={() => console.log(`clicked ${card.file}`)}
            />
          );
        })
      ) : (
        <h1>No DATA</h1>
      )}
    </div>
  );
};

export default DataCartas;
