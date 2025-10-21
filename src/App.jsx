import "./App.css";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSheetData } from "./store/dataSlice";
import Encabezado from "./Componentes/Encabezado";
import Pie from "./Componentes/PiePagina";
import PageWrapper from "./Componentes/PageWrapper";
import Rutas from "./Rutas";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.value);

  useEffect(() => {
    console.log("fetching data...");
    dispatch(fetchSheetData());
  }, [data, dispatch]);

  return (
    <>
      <div className="absolute inset-0 -z-10 bg-[url('/img/fondo.svg')] bg-cover bg-center bg-fixed" />
      <div className="absolute inset-0 -z-10 bg-[#36463E]/20" />
      <div className="flex h-[100vh] flex-col relative">
        <div className="shrink-0">
          <Encabezado />
        </div>
        <AnimatePresence mode="wait">
          <main className="w-full flex-1 relative z-10 mt-4 overflow-auto">
            <PageWrapper>
              <Rutas />
            </PageWrapper>
          </main>
        </AnimatePresence>
        <div className="shrink-0">
          <Pie />
        </div>
      </div>
    </>
  );
}

export default App;
