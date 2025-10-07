const CardPcClases = (props) => {
  const { key, titulo, subtitulo, infoExtendida, precioClase, precioMensual } =
    props;

  const mensaje = `Hola Tania! Quisiera saber más sobre las ${titulo} - ${subtitulo}.`;
  const urlWhatsApp = `https://wa.me/5493874153109?text=${encodeURIComponent(mensaje)}`;
  return (
    <div
      key={key}
      className="w-72 h-75 bg-transparent rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#5F6F66]  mt-8 overflow-visible mx-4"
    >
      <div className="w-72 h-75 bg-[#EDE8DF] rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] mt-4 ml-4 py-2 px-4 relative">
        <div className="flex gap-4 items-end">
          <h3 className="uppercase font-family-titulo text-[20px] text-verde-oscuro">
            {titulo}
          </h3>
          <h5 className="text-verde-oscuro">{subtitulo}</h5>
        </div>
        <p className="my-2 text-verde-oscuro text-sm">{infoExtendida}</p>
        <p className="text-verde-oscuro">{precioClase}</p>
        <p className="text-verde-oscuro">{precioMensual}</p>
        <div className="flex justify-end">
          <a
            href={urlWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#36463E] p-2 text-[#ffffff] rounded-[10px] mt-4 shadow-2xl cursor-pointer hover:bg-[#2a3b34] absolute -bottom-4 right-1"
          >
            Consultar
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPcClases;
