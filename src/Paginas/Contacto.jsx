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
            <a
              className="-ml-2"
              href="https://www.instagram.com/acroyoga.data/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/infoInstaContacto.svg" alt="fondo insta" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100069894100553"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/infoFaceContacto.svg" alt="fondo face" />
            </a>
          </div>
          <a
            href="https://wa.me/5493874153109?text=Hola%20Tania!%20Estuve%20en%20tu%20p%C3%A1gina%20y%20me%20interesar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20clases%20de%20acroyoga."
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/infoWappContacto.svg" alt="fondo wapp" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dataacroyoga@gmail.com&su=Consulta&body=Hola%20Tania!%20Estuve%20en%20tu%20página%20y%20quiero%20saber%20más%20sobre..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/infoEmailContacto.svg" alt="fondo email" />
          </a>
        </div>
        <div className="hidden sm:flex overflow-hidden">
          <img src="/img/fotoContacto.svg" alt="" />
        </div>
      </div>
      <div className="hidden sm:flex flex-col">
        <button>
          <img src="/img/presentacionPCcontacto.svg" alt="info" />
        </button>
        <div className="flex -ml-10 justify-center items-center">
          <a
            href="https://www.instagram.com/acroyoga.data/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/instagramPCcontacto.svg" alt="info" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100069894100553"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1"
          >
            <img src="/img/facePCcontacto.svg" alt="info" />
          </a>
        </div>
        <a
          href="https://wa.me/5493874153109?text=Hola%20Tania!%20Estuve%20en%20tu%20p%C3%A1gina%20y%20me%20interesar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20clases%20de%20acroyoga."
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/wappPCcontacto.svg" alt="info" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dataacroyoga@gmail.com&su=Consulta&body=Hola%20Tania!%20Estuve%20en%20tu%20página%20y%20quiero%20saber%20más%20sobre..."
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/emailPCcontacto.svg" alt="info" />
        </a>
      </div>
    </div>
  );
};

export default Contacto;
