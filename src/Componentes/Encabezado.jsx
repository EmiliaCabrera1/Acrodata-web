import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Encabezado = () => {
  const [expanded, setExpanded] = useState(false);

  const secciones = [
    { nombre: "Inicio", link: "/" },
    { nombre: "Cartas/Juego", link: "/juegoportada" },
    { nombre: "Clases", link: "/clases" },
    { nombre: "Contacto", link: "/contacto" },
    { nombre: "Cartilla", link: "/cartilla" },
  ];

  return (
    <>
      <nav className="flex relative">
        <img
          src="/img/logoNav.svg"
          alt="Logo"
          className="absolute bottom-[20%] left-[10vw] h-[60%] sm:h-[90%] sm:bottom-[5%]"
        />
        <div className="sm:hidden w-full">
          {!expanded && (
            <>
              <img
                className="w-full h-auto object-fill"
                src="/img/navCerrada.svg"
                alt="Navbar"
              />
              <button
                className={"absolute bottom-0 right-[2vw]"}
                onClick={() => setExpanded(!expanded)}
              >
                <img
                  src="/img/hamburgesa.svg"
                  alt="Menu Hamburguesa"
                  className="object-fill w-[20vw] h-auto"
                />
              </button>
            </>
          )}
          {expanded && (
            <>
              <img
                className="w-full h-auto"
                src="/img/navAbierta.svg"
                alt="Navbar"
              />
              <div className="w-[40vw] h-auto z-20 bg-verde-intermedio shadow-custom-shadow rounded-2xl absolute top-[70%] right-[2vw] p-3">
                <ul className="text-white px-3 mx-auto">
                  {secciones.map((seccion, index) => (
                    <li
                      key={index}
                      className={
                        index < secciones.length - 1
                          ? "border-b-1 mb-2"
                          : "mb-2"
                      }
                    >
                      <a href={seccion.link}>{seccion.nombre}</a>
                    </li>
                  ))}
                </ul>
                <button
                  className="absolute top-1 right-4 text-white"
                  onClick={() => setExpanded(!expanded)}
                >
                  x
                </button>
              </div>
            </>
          )}
        </div>
        <div className="hidden sm:flex w-full h-auto bg-verde-intermedio shadow-custom-shadow justify-end pr-8">
          {secciones.map((seccion, index) => (
            <h1 key={index} className="text-white text-lg px-2 my-4">
              <a href={seccion.link}>{seccion.nombre}</a>
            </h1>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Encabezado;
