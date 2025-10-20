import { twMerge } from "tailwind-merge";

const CardChica = ({ key, card, onClick, forma = "normal" }) => {
  const url = `/cards/${card.imagen.toUpperCase()}.PNG`;

  const size = {
    normal: "w-18 h-24",
    grande: "w-27 h-36",
  };

  return (
    <button
      onClick={onClick}
      key={key}
      className={twMerge(
        size[forma],
        "p-1 flex items-center justify-center bg-fondo-claro rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] cursor-pointer"
      )}
    >
      <img
        src={url}
        alt={card.nombre}
        className="max-w-full max-h-full object-contain drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]"
      />
    </button>
  );
};

export default CardChica;
