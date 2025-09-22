const CardPcClases = () => {
  return (
    <div className="w-72 h-75 bg-transparent rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#5F6F66]  mt-8 overflow-visible">
      <div className="w-72 h-75 bg-[#EDE8DF] rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] mt-4 ml-4 py-2 px-4 ">
        <div className="flex gap-4 items-end">
          <h3 className="uppercase font-family-titulo text-[20px]">
            CLASES INDIVIDUALES
          </h3>
          <h5>Online</h5>
        </div>
        <p className="my-2">
          Conectá desde casa con una clase online de acroyoga: calentamos,
          exploramos invertidas y unimos posturas básicas en un flow lleno de
          energía.
        </p>
        <p>Precio individual: $</p>
        <p>Precio mensual: $</p>
        <div className="flex justify-end">
          <button className="bg-[#36463E] p-2 text-[#ffffff] rounded-[10px] mt-4 shadow-2xl ">
            Consultar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPcClases;
