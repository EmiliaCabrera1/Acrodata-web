const Clases = () => {
  return (
    <div>
      <h2 className="font-family-titulo text-[20px] text-[#36463E] mx-4 my-3">
        Clases de Acroyoga
      </h2>
      <p className="mx-4 mb-6 text-[15px] text-[#36463E]">
        Clases divertidas para todos, sin necesidad de experiencia. Empezamos
        con calentamiento y movilidad, seguimos con invertidas para ganar fuerza
        y confianza, y cerramos volando en pareja. Conexión, comunicación y
        disfrute en cada encuentro. ¡Animate a volar!{" "}
      </p>
      <div className="flex justify-center">
        <div className=" m-2 w-44 h-100 bg-neutral-500/0 rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] border border-neutral-500">
          <img className="-mb-1" src="/img/imgClases1.svg" alt="Img" />
        </div>
        <div>
          <div className="flex relative items-end m-2">
            <img src="/img/infoChica.svg" alt="fondo chico" />
            <img
              className="my-2 absolute right-2 bottom-2"
              src="/img/abrirInfo.svg"
              alt="flecha"
            />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Clases;
