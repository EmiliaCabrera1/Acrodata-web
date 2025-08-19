import { useState } from "react";

const Encabezado = () => {
  const [expand, setExpand] = useState(false);

  // Posición y tamaño del hueco
  const holeWidth = expand ? 140 : 100;
  const holeHeight = expand ? 110 : 100;
  const holeRx = holeHeight / 4; // Para que coincida con border-radius del botón
  const holeCx = expand ? "100%" : "90%";
  const holeCy = "80%";

  return (
    <div className="relative flex items-center justify-center h-36 w-full bg-gradient-to-r from-transparent to-transparent">
      <div className="relative h-36 w-full overflow-hidden">
        {/* SVG que “come” el div */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <mask id="hole">
              <rect width="100%" height="100%" fill="white" />
              {/* Rectángulo redondeado como hueco */}
              <rect
                x={holeCx}
                y={holeCy}
                width={holeWidth}
                height={holeHeight}
                rx={holeRx}
                ry={holeRx}
                fill="black"
                className="transition-all duration-700 ease-in-out"
                transform={`translate(-${holeWidth / 2}, -${holeHeight / 2})`}
              />
            </mask>
          </defs>
          {/* Rect que reemplaza el color del div */}
          <rect width="100%" height="100%" fill="#14B8A6" mask="url(#hole)" />
        </svg>

        {/* Botón */}
        <button
          onClick={() => setExpand(!expand)}
          className={`absolute w-20 h-10 bg-teal-300 rounded-full shadow-lg
            bottom-4 right-4
            transition-all duration-700 ease-in-out
            ${expand ? "translate-x-2 translate-y-2 w-24 h-12" : ""}`}
        />
      </div>
    </div>
  );
};

export default Encabezado;
