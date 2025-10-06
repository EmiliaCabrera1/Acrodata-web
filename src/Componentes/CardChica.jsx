const CardChica = ({ card, onClick }) => {
  const url = `/cards/${card.imagen.toUpperCase()}.PNG`;

  return (
    <button
      onClick={onClick}
      className="p-1 flex items-center justify-center w-18 h-24 bg-fondo-claro rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] cursor-pointer"
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
