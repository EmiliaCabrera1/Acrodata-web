import "./App.css";
import Rutas from "./Rutas";
import Encabezado from "./Componentes/Encabezado";
import Pie from "./Componentes/PiePagina";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSheetData } from "./store/dataSlice";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.value);

  useEffect(() => {
    if (!data || data?.lenght === 0) {
      console.log("fetching data...");
      dispatch(fetchSheetData());
    }
  }, [data, dispatch]);

  return (
    <>
      <div className="flex flex-col relative min-h-dvh overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('/img/fondo.svg')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 -z-10 bg-[#36463E]/20"></div>
        <Encabezado />
        <main className="w-full h-0 flex-grow relative z-10 max-h-[90vh] overflow-y-auto">
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
