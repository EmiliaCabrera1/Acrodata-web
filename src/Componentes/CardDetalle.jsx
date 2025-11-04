const cardDetalle = ({ card, onClick }) => {
  const url = `/cards/${card?.imagen?.toUpperCase()}.PNG`;

  return (
    <div className="flex flex-col bg-fondo-claro rounded-lg shadow-xl overflow-hidden w-[90vw] sm:w-96 h-[50vh] sm:h-[60vh]">
      {/* Header */}
      <h2 className="text-center font-family-titulo text-[#36463E] mt-8 uppercase text-[20px] ">
        {card.nombre}
      </h2>
      <div className="flex-grow h-[50%] flex items-center justify-center px-4">
        <img
          src={url}
          alt="Img"
          className="max-h-full object-contain drop-shadow-[0px_4px_4px_rgba(0,0,0,0.45)]"
          loading="lazy"
        />
      </div>
      {/* Footer */}
      <div className="px-4 my-4">
        <h2 className="text-center text-[#36463E] uppercase text-[15px]">
          {card.descripcion}
        </h2>
        <div className="flex justify-end mt-2">
          <button
            onClick={onClick}
            className="text-white text-xs font-medium bg-[#36463E] px-4 py-2 rounded-lg shadow-lg active:shadow-inner cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default cardDetalle;
