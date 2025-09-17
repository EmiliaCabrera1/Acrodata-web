import React from "react";

const Contacto = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center relative overflow-hidden">
      <h2 className="font-family-titulo text-[20px] text-[#36463E] mx-4 mb-3 mt-7 ">
        {" "}
        Hablemos y nos ponemos en movimiento juntos
      </h2>

      <div className=" ml-4">
        <button className="-mr-4">
          {" "}
          <img src="/img/infoTaniaContacto.svg" alt="fondo info" />
        </button>
        <div className="gap-4">
          <div className="flex -ml-1 ">
            <button>
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
      </div>
      <div className="absolute bottom-10 -right-20">
        <img src="/img/fotoContacto.svg" alt="" />
      </div>
    </div>
  );
};

export default Contacto;
