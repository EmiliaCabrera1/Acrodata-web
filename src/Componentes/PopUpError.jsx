const PopUpError = () => {
  return (
    <div className="flex flex-col bg-fondo-claro rounded-lg shadow-xl overflow-hidden w-[80vw] sm:[50vw] h-[30vh] sm:h-[40vh]">
      <h6 className="text-[#36463E]">Debes seleccionar al menos una dificultad</h6>
      <button className="text-white text-xs font-medium bg-[#36463E] px-4 py-2 rounded-lg shadow-lg active:shadow-inner cursor-pointer">Aceptar</button>
    </div>
  );
};

export default PopUpError;
