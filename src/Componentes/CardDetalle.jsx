const cardDetalle = ({ card, onClick }) => {
  const url = `/cards/${card?.imagen?.toUpperCase()}.PNG`;

  return (
    <div className="flex flex-col bg-fondo-claro rounded-lg shadow-xl overflow-hidden">
      {/* Header */}
      <h2 className="text-center font-family-titulo text-[#36463E] mt-8 uppercase text-[20px] ">
        {card.nombre}
      </h2>

      {/* Imagen: flex-grow + h-1 fuerza ocupar solo espacio sobrante */}
      <div className="flex-grow h-1 flex items-center justify-center px-4">
        <img
          src={url}
          alt="Img"
          className="max-h-full object-contain drop-shadow-[0px_4px_4px_rgba(0,0,0,0.45)]"
        />
      </div>

      {/* Footer */}
      <div className="px-4 pb-8">
        <h2 className="text-center text-[#36463E] mt-8 uppercase text-[15px] mb-8 ">
          {card.descripcion}
        </h2>
        <div className="flex justify-end">
          <button
            onClick={onClick}
            className="text-white text-xs font-medium bg-[#36463E] px-4 py-2 rounded-lg shadow-lg active:shadow-inner"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default cardDetalle;
