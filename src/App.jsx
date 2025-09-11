import "./App.css";
import Rutas from "./Rutas";
import Encabezado from "./Componentes/Encabezado";
import Pie from "./Componentes/PiePagina";

function App() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 -z-10 bg-[url('/img/fondo.svg')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 -z-10 bg-[#36463E]/20"></div>

        <Encabezado />

        <main className="w-full h-[85vh] sm:h-[75vh] overflow-y-auto relative z-10">
          <Rutas />
        </main>

        <footer>
          {" "}
          <Pie />
        </footer>
      </div>
    </>
  );
}

export default App;
