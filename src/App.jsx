import "./App.css";
import Rutas from "./Rutas";
import Encabezado from "./Componentes/Encabezado";
import Pie from "./Componentes/PiePagina";
import Main from "./Componentes/Layout/Main";
import Layout from "./Componentes/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSheetData } from "./store/dataSlice";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.value);

  useEffect(() => {
    if (!data || data?.length === 0) {
      console.log("fetching data...");
      dispatch(fetchSheetData());
    }
  }, [data, dispatch]);

  return (
    <Layout>
      <Encabezado />
      <Main>
        <Rutas />
      </Main>
      <Pie />
    </Layout>
  );
}

export default App;
