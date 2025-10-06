const Main = ({ children }) => {
  return (
    <main className="w-full h-1 flex-grow relative z-10 max-h-[90dvh] overflow-y-auto">
      {children}
    </main>
  );
};

export default Main;
