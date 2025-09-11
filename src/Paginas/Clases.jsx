import { useState } from "react";
import ImgClases from "../Componentes/ImgClases";
import ImgClasesAbierta from "../Componentes/ImgClasesAbierta";
import InfoClasesCerrada from "../Componentes/InfoClasesCerrada";
import InfoClasesAbierta from "../Componentes/InfoClasesAbierta";

const Clases = () => {
  const [claseCerrada, setClaseCerrada] = useState(false);

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
        {claseCerrada && (
          <>
            <ImgClases />
            <div>
              <InfoClasesCerrada
                fondo={"/img/fondoInfoChica1.svg"}
                titulo="CLASES INDIVIDUALES"
                subtitulo="Online"
              />
              <InfoClasesCerrada
                fondo={"/img/fondoInfoChica2.svg"}
                titulo="CLASES INDIVIDUALES"
                subtitulo="Presencial"
              />
              <InfoClasesCerrada
                fondo={"/img/fondoInfoChica3.svg"}
                titulo="CLASES GRUPALES"
                subtitulo="Presencial"
              />
            </div>
          </>
        )}
        {!claseCerrada && (
          <>
            <div>
              <InfoClasesAbierta
                titulo="CLASES INDIVIDUALES"
                subtitulo="Online"
                info="Clases personalizadas adaptadas a tus necesidades y nivel."
                precioMensual="Precio mensual: $15.000 (4 clases mensuales)"
                precioClase="Precio por clase: $4.500"
                accionCerrar={() => setClaseCerrada(true)}
              />
              <div className="flex ">
                <ImgClasesAbierta />
                <div>
                  <InfoClasesCerrada
                    fondo={"/img/fondoInfoChica2.svg"}
                    titulo="CLASES INDIVIDUALES"
                    subtitulo="Presencial"
                  />
                  <InfoClasesCerrada
                    fondo={"/img/fondoInfoChica3.svg"}
                    titulo="CLASES GRUPALES"
                    subtitulo="Presencial"
                  />
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
