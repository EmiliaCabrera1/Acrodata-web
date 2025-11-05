const PopUpError = ({ mensaje, onClick }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(95,111,102,0.7)] z-80 w-[100vw] h-[100vh]">
      <div className="flex flex-col bg-fondo-claro rounded-lg shadow-xl overflow-hidden w-[80vw] sm:[50vw] h-[20vh] sm:h-[40vh] p-10">
        <h6 className="text-[#36463E]">{mensaje}</h6>
        <button
          className="text-white text-xs font-medium bg-[#36463E] px-4 py-2 rounded-lg shadow-lg active:shadow-inner cursor-pointer w-auto mt-4"
          onClick={onClick}
        >
          Aceptar
        </button>
    </div>
    </div>
  );
};

export default PopUpError;
