import { Routes, Route } from "react-router-dom";
import Clases from "./Paginas/Clases";
import Principal from "./Paginas/Principal";
import DataCartas from "./Paginas/DataCartas";
import Contacto from "./Paginas/Contacto";
import Juego from "./Paginas/Juego";
import JuegoPortada from "./Paginas/JuegoPortada";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/clases" element={<Clases />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/datacartas" element={<DataCartas />} />
      <Route path="/juegoportada" element={<JuegoPortada />} />
      <Route path="/juego" element={<Juego />} />
    </Routes>
  );
};

export default Rutas;
