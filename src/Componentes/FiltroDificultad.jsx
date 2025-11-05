const opciones = ["Todas", "Principiante", "Intermedio", "Avanzado"];

const FiltroDificultad = ({ value = "Todas", setValue = () => {} }) => {
  return (
    <div className="flex flex-col w-[55px] h-full overflow-y-clip mr-8">
      {opciones.map((opcion, idx) => (
        <button
          key={idx}
          className="flex flex-row min-w-[50px]"
          onClick={() => setValue(opcion)}
        >
          <h2 className="[writing-mode:vertical-lr] rotate-180">{opcion}</h2>
          {value === opcion && (
            <img src="/img/selectorFiltroSeleccionado.svg" />
          )}
          {value !== opcion && <img src="/img/selectorFiltro.svg" />}
        </button>
      ))}
      <div className="h-full w-full flex flex-row">
        <div className="w-[24px] bg-red" />
        <div className="w-[26px] border-r-1 border-verde-oscuro" />
      </div>
    </div>
  );
};

export default FiltroDificultad;
