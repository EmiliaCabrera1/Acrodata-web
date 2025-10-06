import React from "react";

const DataCartasLayout = (props) => {
  const { Filtro, Cartas, Detalle } = props;
  return (
    <div className="w-full max-h-full flex flex-row gap-2">
      <div className="ml-2 sm:ml-6 w-fit">
        <Filtro />
      </div>
      <div className="flex flex-row flex-wrap flex-4 overflow-y-auto gap-4 pb-4 content-start mb-4">
        <Cartas />
      </div>
      <div className="hidden sm:flex sm:flex-2 sm:mr-8">
        <Detalle />
      </div>
    </div>
  );
};

export default DataCartasLayout;
