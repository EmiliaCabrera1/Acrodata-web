import { useState } from "react";

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
        <div className="sm:hidden w-full">
          {!expanded && (
            <>
              <img
                className="w-full h-auto"
                src="/img/navCerrada.svg"
                alt="Navbar"
              />
              <img
                src="/img/logoNav.svg"
                alt="Logo"
                className="absolute bottom-[2vh] left-[9vw] w-[19vw] h-auto sm:left-[35vw] sm:w-[50vw]"
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
              <img
                src="/img/logoNav.svg"
                alt="Logo"
                className="absolute bottom-0 left-[2vw] w-[20vw] h-auto"
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
        <div className="hidden sm:flex w-full h-20 bg-verde-intermedio shadow-custom-shadow justify-between items-center pr-8">
          <img
            src="/img/logoNav.svg"
            alt="Logo"
            className="ml-8 h-16 w-auto"
          />
          <div className="flex">
            {secciones.map((seccion, index) => (
              <h1 key={index} className="text-white text-lg px-2 my-4">
                <a href={seccion.link}>{seccion.nombre}</a>
              </h1>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Encabezado;
