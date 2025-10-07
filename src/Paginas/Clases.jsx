import { useState } from "react";
import ImgClases from "../Componentes/ImgClases";
import ImgClasesAbierta from "../Componentes/ImgClasesAbierta";
import InfoClasesCerrada from "../Componentes/InfoClasesCerrada";
import InfoClasesAbierta from "../Componentes/InfoClasesAbierta";
import TextoCelClases from "../Componentes/TextoCelClases";
import TextoPcClases from "../Componentes/TextoPcClases";
import CardPcClases from "../Componentes/CardPcClases";
import useClases from "../Hooks/useClases";

const Clases = () => {
  const [claseAbierta, setClaseAbierta] = useState(null);

  const clases = useClases();

  const infoClases = [
    {
      id: 1,
      titulo: "CLASES INDIVIDUALES",
      subtitulo: "Online",
      info: "Clases personalizadas adaptadas a tus necesidades y nivel.",
      infoExtendida:
        "Conectá desde casa con una clase online de acroyoga: calentamos, exploramos invertidas y unimos posturas básicas en un flow lleno de energía.",
      precioMensual: `Precio mensual: ${clases?.particularOnline?.mensual} (4 clases mensuales)`,
      precioClase: `Precio por clase: ${clases?.particularOnline?.porClase}`,
      fondo: "/img/fondoInfoChica1.svg",
    },
    {
      id: 2,
      titulo: "CLASES INDIVIDUALES",
      subtitulo: "Presencial",
      info: "Clases personalizadas adaptadas a tus necesidades y nivel.",
      infoExtendida:
        "Viví una práctica hecha a tu medida: en la clase presencial trabajamos en detalle tu cuerpo, tus objetivos y tu ritmo. Te acompaño paso a paso para que avances con seguridad, confianza y disfrute.",
      precioMensual: `Precio mensual: ${clases?.particularPresencial?.mensual} (4 clases mensuales)`,
      precioClase: `Precio por clase: ${clases?.particularPresencial?.porClase}`,
      fondo: "/img/fondoInfoChica2.svg",
    },
    {
      id: 3,
      titulo: "CLASES GRUPALES",
      subtitulo: "Presencial",
      info: "Clases personalizadas adaptadas a tus necesidades y nivel.",
      infoExtendida:
        "Compartí la energía del grupo en una clase de acroyoga donde todos los niveles tienen su lugar. Jugamos, aprendemos y fluimos juntos, combinando posturas y dinámicas que se adaptan tanto a quienes recién empiezan como a quienes ya tienen experiencia.",
      precioMensual: `Precio mensual: ${clases?.grupal?.mensual} (8 clases mensuales)`,
      precioClase: `Precio por clase: ${clases?.grupal?.porClase}`,
      fondo: "/img/fondoInfoChica2.svg",
    },
  ];

  return (
    <div>
      {/* CEL */}
      <h2 className="font-family-titulo text-[20px] text-[#36463E] mx-4 mt-2 mb-1 flex sm:hidden ">
        Clases de Acroyoga
      </h2>
      <TextoCelClases />
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
      {/* PC */}
      <div className="hidden sm:flex flex-col ml-8">
        <h2 className="font-family-titulo text-[30px] text-[#36463E] m-4">
          ¡Volá con nosotros en las clases de AcroYoga!
        </h2>
        <div className="flex flex-row">
          <ImgClases />
          <div className="flex flex-col">
            <TextoPcClases />
            <div className="flex flex-row justify-around">
              {infoClases.map((clase) => (
                <CardPcClases
                  key={clase.id}
                  id={clase.id}
                  fondo={clase.fondo}
                  titulo={clase.titulo}
                  subtitulo={clase.subtitulo}
                  infoExtendida={clase.infoExtendida}
                  precioClase={clase.precioClase}
                  precioMensual={clase.precioMensual}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clases;
