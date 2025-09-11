const InfoClasesCerrada = ({ fondo, titulo, subtitulo }) => {
  return (
    <div className="flex relative items-end mx-2 mt-2 mb-4">
      <img src={fondo} alt="fondo" />
      <div className="absolute top-2 left-4">
        <h2 className="text-[12px] text-[#36463E] font-semibold ">{titulo}</h2>
        <h3 className="text-[12px] text-[#36463E]">{subtitulo}</h3>
      </div>
      <img
        className="my-2 absolute right-2 bottom-2"
        src="/img/abrirInfo.svg"
        alt="flecha"
      />
    </div>
  );
};

export default InfoClasesCerrada;
