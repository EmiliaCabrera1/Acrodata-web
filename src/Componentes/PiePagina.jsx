const PiePagina = () => {
  return (
    <footer className="w-full flex items-center justify-center bg-[#5F6F66] p-4 gap-4 inset-shadow">
      <a
        href="https://www.instagram.com/acroyoga.data/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/img/logoInstagram.svg"
          alt="Logo Instagram"
          className="w-5 h-5 sm:w-8 sm:h-8"
        />
      </a>
      <a href="mailto:tucorreo@gmail.com?subject=Consulta&body=Hola!%20Quisiera%20saber%20más%20sobre...">
        <img
          src="/img/logoGmail.svg"
          alt="Logo Gmail"
          className="w-5 h-5 sm:w-8 sm:h-8"
        />
      </a>
      <a
        href="https://wa.me/5493874153109?text=Hola%20Tania!%20Estuve%20en%20tu%20p%C3%A1gina%20y%20me%20interesar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20clases%20de%20acroyoga."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/img/logoWapp.svg"
          alt="Logo Whatsapp"
          className="w-5 h-5 sm:w-8 sm:h-8"
        />
      </a>
      <a
        href="hhttps://www.facebook.com/profile.php?id=100069894100553"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/img/logoFacebook.svg"
          alt="Logo Facebook"
          className="w-5 h-5 sm:w-8 sm:h-8"
        />
      </a>
    </footer>
  );
};

export default PiePagina;
