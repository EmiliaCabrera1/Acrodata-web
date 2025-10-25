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

  useEffect(() => {
    dispatch(fetchSheetData());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute inset-0 -z-10 bg-[url('/img/fondo.svg')] bg-cover bg-center bg-fixed" />
      <div className="absolute inset-0 -z-10 bg-[#36463E]/20" />
      <div className="flex h-[100vh] flex-col relative">
        <Encabezado />
        <main
          className="flex-1 overflow-y-auto mt-8 mb-[60px]"
          style={{ height: "calc(100vh - var(--pie-height))" }}
        >
          <AnimatePresence mode="wait">
            <PageWrapper>
              <Rutas />
            </PageWrapper>
          </AnimatePresence>
        </main>
        <div className="fixed bottom-0 left-0 w-full z-50">
          <Pie />
        </div>
      </div>
    </div>
  );
}

export default App;
