import "./App.css";
import Encabezado from "./Componentes/encabezado";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[url('/img/fondo.svg')] bg-cover bg-center bg-fixed h-full">
        <div className="min-h-screen bg-[#36463E]/20">
          <Encabezado />
        </div>
      </div>
    </>
  );
}

export default App;
