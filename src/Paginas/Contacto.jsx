import React from "react";

const Contacto = () => {
  return (
    <div className="w-full h-full flex flex-col items-center relative overflow-hidden sm:items-start sm:ml-40 ">
      <h2 className="font-family-titulo text-[20px] text-[#36463E] mx-4 mb-3 mt-7 sm:my-10">
        {" "}
        Hablemos y nos ponemos en movimiento juntos
      </h2>
      <div className="flex gap-20">
        <div className=" ml-4 sm:ml-0 h-full flex flex-col">
          <button className="-mr-4">
            {" "}
            <img src="/img/infoTaniaContacto.svg" alt="fondo info" />
          </button>
          <div className="flex flex-row">
            <button className="-ml-2">
              <img src="/img/infoInstaContacto.svg" alt="fondo insta" />
            </button>
            <button>
              <img src="/img/infoFaceContacto.svg" alt="fondo face" />
            </button>
          </div>
          <button>
            <img src="/img/infoWappContacto.svg" alt="fondo wapp" />
          </button>
          <button>
            <img src="/img/infoEmailContacto.svg" alt="fondo email" />
          </button>
        </div>
        <div className="hidden sm:flex overflow-hidden">
          <img src="/img/fotoContacto.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
