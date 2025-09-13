const cardDetalle = ({ card, onClick }) => {
  const url = `https://drive.google.com/thumbnail?id=${card.file}&sz=h900`;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-green-900/20">
      <div className="flex flex-col w-80 h-[80%] bg-stone-200 rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <h2 className="text-xl font-medium text-center mt-4">{card.nombre}</h2>

        {/* Imagen: flex-grow + h-0 fuerza ocupar solo espacio sobrante */}
        <div className="flex-grow h-0 flex items-center justify-center px-4">
          <img
            src={url}
            alt="Img"
            className="max-h-full object-contain drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          />
        </div>

        {/* Footer */}
        <div className="px-4 pb-4">
          <h2 className="text-center mb-4">{card.descripcion}</h2>
          <div className="flex justify-end">
            <button
              onClick={onClick}
              className="text-white text-xs font-medium bg-[#36463E] px-4 py-2 rounded-lg shadow-md active:shadow-inner"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardDetalle;
