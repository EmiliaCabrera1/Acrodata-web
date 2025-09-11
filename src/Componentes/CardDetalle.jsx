const cardDetalle = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-green-900/20">
      <div className="flex-col items-center justify-center relative w-80 h-[467px] bg-stone-200 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <h2 className="font-family-titulo text-xl font-medium text-center mt-4  ">
          Nombre
        </h2>
        <img
          className="w-auto h-80 drop-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mx-auto "
          src="/img/imgClases2.svg"
          alt="Img"
        />
        <h2 className="text-center mt-4">Explicación</h2>

        <button className="absolute bottom-[3%] left-[75%]  text-white text-xs font-medium bg-[#36463E] px-4 py-2 rounded-lg shadow-md active:shadow-inner">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default cardDetalle;
