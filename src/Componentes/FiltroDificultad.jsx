const opciones = ["Todas", "Principiante", "Intermedio", "Avanzado"];

const FiltroDificultad = ({ value = "Todas", setValue = () => {} }) => {
  return (
    <div className="flex flex-col w-[55px] h-full overflow-y-clip mr-8">
      {opciones.map((opcion, idx) => (
        <button
          key={idx}
          className="flex flex-row"
          onClick={() => setValue(opcion)}
        >
          <h2 className="[writing-mode:vertical-lr] rotate-180">{opcion}</h2>
          {value === opcion && (
            <img src="/img/selectorFiltroSeleccionado.svg" />
          )}
          {value !== opcion && <img src="/img/selectorFiltro.svg" />}
        </button>
      ))}
      <div className="w-full flex flex-row">
        <img
          className="object-cover ml-[24px]"
          src="/img/selectorFiltroLargo.svg"
        />
      </div>
    </div>
  );
};

export default FiltroDificultad;
