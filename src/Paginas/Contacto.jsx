import React from "react";

const Contacto = () => {
  return (
    <div className="flex flex-col items-center justify-start sm:justify-center relative sm:mx-auto sm:my-auto ">
      <h2 className="font-family-titulo text-[20px] sm:text-[26px] text-[#36463E] -ml-2 mb-3 mt-10 sm:mt-10 sm:mb-5 ">
        {" "}
        Hablemos y nos ponemos en movimiento juntos
      </h2>
      <div className="flex gap-20 sm:hidden ">
        <div className=" ml-4 sm:ml-0 h-full flex flex-col">
          <button className="-mr-4 ">
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
      <div className="hidden sm:flex flex-col">
        <button>
          <img src="/img/presentacionPCcontacto.svg" alt="info" />
        </button>
        <div className="flex -ml-10">
          <button>
            <img src="/img/instagramPCcontacto.svg" alt="info" />
          </button>
          <button>
            <img src="/img/facePCcontacto.svg" alt="info" />
          </button>
        </div>
        <button>
          <img src="/img/wappPCcontacto.svg" alt="info" />
        </button>
        <button>
          <img src="/img/emailPCcontacto.svg" alt="info" />
        </button>
      </div>
    </div>
  );
};

export default Contacto;
