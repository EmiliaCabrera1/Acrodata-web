import Encabezado from "../Encabezado";
import Pie from "../PiePagina";

const Layout = ({ children }) => {
  return (
    <>
      <div className="absolute inset-0 -z-10 bg-[url('/img/fondo.svg')] bg-cover bg-center bg-fixed" />
      <div className="absolute inset-0 -z-10 bg-[#36463E]/20" />
      <div className="flex h-[100dvh] flex-col relative">
        <div className="shrink-0">
          <Encabezado />
        </div>
        <main className="w-full flex-1 relative z-10 mt-2 overflow-y-hidden">
          {children}
        </main>
        <div className="shrink-0">
          <Pie />
        </div>
      </div>
    </>
  );
};

export default Layout;
