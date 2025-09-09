import { Routes, Route } from "react-router-dom";
import Clases from "./Paginas/Clases";
import Principal from "./Paginas/Principal";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/clases" element={<Clases />} />
    </Routes>
  );
};

export default Rutas;
