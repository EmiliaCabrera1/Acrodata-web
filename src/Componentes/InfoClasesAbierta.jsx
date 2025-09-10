const InfoClasesCerrada = ({
  titulo,
  subtitulo,
  info,
  precioMensual,
  precioClase,
}) => {
  return (
    <div className="flex relative items-end mx-2 mt-2 mb-7">
      <img src="/img/infoGrande.svg" alt="fondo chico" />
      <div className="absolute top-2 left-4">
        <h2 className="text-[12px] text-[#36463E] font-semibold ">{titulo}</h2>
        <h3 className="text-[12px] text-[#36463E]">{subtitulo}</h3>
        <h3 className="text-[12px] text-[#36463E]">{info}</h3>
        <h3 className="text-[12px] text-[#36463E]">{precioMensual}</h3>
        <h3 className="text-[12px] text-[#36463E]">{precioClase}</h3>
      </div>
      <button className="text-white text-xs font-normal bg-[#36463E] absolute top-22 left-60 p-2 rounded-lg">
        Consultar
      </button>
      <img
        className="my-2 absolute right-2 bottom-2"
        src="/img/cerrarInfo.svg"
        alt="flecha"
      />
    </div>
  );
};

export default InfoClasesCerrada;
