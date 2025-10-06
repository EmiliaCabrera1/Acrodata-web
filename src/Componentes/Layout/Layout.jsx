const Layout = ({ children }) => {
  return (
    <div className="flex flex-col relative min-h-[100dvh] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[url('/img/fondo.svg')] bg-cover bg-center bg-fixed" />
      <div className="absolute inset-0 -z-10 bg-[#36463E]/20" />
      {children}
    </div>
  );
};

export default Layout;
