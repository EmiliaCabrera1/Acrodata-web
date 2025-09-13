const CardChica = ({ card, onClick }) => {
  const url = `https://drive.google.com/thumbnail?id=${card.file}&sz=h100`;
  return (
    <button
      onClick={onClick}
      className="p-2 flex flex-col justify-end w-16 h-24 bg-stone-200 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer"
    >
      <img className="w-auto max-h-24" src={url} alt={card.nombre} />
    </button>
  );
};

export default CardChica;
