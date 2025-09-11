const InfoClasesCerrada = ({
  titulo,
  subtitulo,
  info,
  precioMensual,
  precioClase,
  accionCerrar,
}) => {
  return (
    <div className="flex relative items-end m-2">
      <img
        className="w-full h-auto"
        src="/img/infoGrande.svg"
        alt="fondo chico"
      />
      <div className="absolute top-2 left-4">
        <div className="flex gap-2 mb-1">
          <h2 className="text-[12px] text-[#36463E] font-semibold ">
            {titulo}
          </h2>
          <h3 className="text-[12px] text-[#36463E]">{subtitulo}</h3>
        </div>
        <h3 className="text-[12px] text-[#36463E]">{info}</h3>
        <h3 className="text-[12px] text-[#36463E]">{precioMensual}</h3>
        <h3 className="text-[12px] text-[#36463E]">{precioClase}</h3>
      </div>
      <button className="text-white text-xs font-medium bg-[#36463E] absolute top-[68%] left-[65%] p-2 rounded-lg shadow-md active:shadow-inner">
        Consultar
      </button>
      <button onClick={() => accionCerrar()}>
        <img
          className="my-2 absolute right-[4%] bottom-[6%]"
          src="/img/cerrarInfo.svg"
          alt="cruz"
        />
      </button>
    </div>
  );
};

export default InfoClasesCerrada;
