import { useState } from "react";
import ImgClases from "../Componentes/ImgClases";
import ImgClasesAbierta from "../Componentes/ImgClasesAbierta";
import InfoClasesCerrada from "../Componentes/InfoClasesCerrada";
import InfoClasesAbierta from "../Componentes/InfoClasesAbierta";

const Clases = () => {
  const [claseAbierta, setClaseAbierta] = useState(null);

  const infoClases = [
    {
      id: 1,
      titulo: "CLASES INDIVIDUALES",
      subtitulo: "Online",
      info: "Clases personalizadas adaptadas a tus necesidades y nivel.",
      precioMensual: "Precio mensual: $15.000 (4 clases mensuales)",
      precioClase: "Precio por clase: $4.500",
      fondo: "/img/fondoInfoChica1.svg",
    },
    {
      id: 2,
      titulo: "CLASES INDIVIDUALES",
      subtitulo: "Presencial",
      info: "Clases personalizadas adaptadas a tus necesidades y nivel.",
      precioMensual: "Precio mensual: $15.000 (4 clases mensuales)",
      precioClase: "Precio por clase: $4.500",
      fondo: "/img/fondoInfoChica2.svg",
    },
    {
      id: 3,
      titulo: "CLASES GRUPALES",
      subtitulo: "Presencial",
      info: "Clases personalizadas adaptadas a tus necesidades y nivel.",
      precioMensual: "Precio mensual: $15.000 (4 clases mensuales)",
      precioClase: "Precio por clase: $4.500",
      fondo: "/img/fondoInfoChica2.svg",
    },
  ];

  return (
    <div>
      <h2 className="hidden sm:flex font-family-titulo text-[30px] text-[#36463E] m-4">
        ¡Volá con nosotros en las clases de AcroYoga!
      </h2>
      <h2 className="font-family-titulo text-[20px] text-[#36463E] mx-4 mt-2 mb-1 md:hidden ">
        Clases de Acroyoga
      </h2>

      <div className="flex justify-center relative sm:hidden">
        {!claseAbierta && (
          <>
            <ImgClases />
            <div>
              {infoClases.map((clase) => (
                <InfoClasesCerrada
                  key={clase.id}
                  id={clase.id}
                  fondo={clase.fondo}
                  titulo={clase.titulo}
                  subtitulo={clase.subtitulo}
                  onClick={() => setClaseAbierta(clase)}
                />
              ))}
            </div>
          </>
        )}
        {claseAbierta && (
          <>
            <div>
              <InfoClasesAbierta
                titulo={claseAbierta.titulo}
                subtitulo={claseAbierta.subtitulo}
                info={claseAbierta.info}
                precioMensual={claseAbierta.precioMensual}
                precioClase={claseAbierta.precioClase}
                accionCerrar={() => setClaseAbierta(null)}
              />
              <div className="flex relative">
                <ImgClasesAbierta />
                <div>
                  {infoClases
                    .filter((clase) => {
                      return clase.id !== claseAbierta.id;
                    })
                    .map((clase, idx) => (
                      <InfoClasesCerrada
                        key={clase.id}
                        id={clase.id}
                        fondo={`img/fondoInfoChica2.svg`}
                        titulo={clase.titulo}
                        subtitulo={clase.subtitulo}
                        onClick={() => setClaseAbierta(clase)}
                      />
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Clases;
