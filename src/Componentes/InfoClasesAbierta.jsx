import { motion, AnimatePresence } from "framer-motion";

const InfoClasesAbierta = ({
  titulo,
  subtitulo,
  info,
  precioMensual,
  precioClase,
  accionCerrar,
}) => {
  const mensaje = `Hola Tania! Quisiera saber más sobre las ${titulo} - ${subtitulo}.`;
  const urlWhatsApp = `https://wa.me/5493874153109?text=${encodeURIComponent(mensaje)}`;

  return (
    <motion.div 
      className="flex relative items-end m-2"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ 
        duration: 0.2, 
        ease: "easeOut",
        exit: { duration: 0.15, ease: "easeIn" }
      }}
    >
      <img
        className="w-full h-auto"
        src="/img/fondoInfoGrande.svg"
        alt="fondo chico"
      />
      <motion.div 
        className="absolute top-2 left-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 0.05 }}
      >
        <div className="flex gap-3 mb-2">
          <motion.h2 
            className="text-[12px] text-[#36463E] font-semibold"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {titulo}
          </motion.h2>
          <motion.h3 
            className="text-[12px] text-[#36463E]"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            {subtitulo}
          </motion.h3>
        </div>
        <motion.h3 
          className="text-[12px] text-[#36463E] mb-2"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          {info}
        </motion.h3>
        <motion.h3 
          className="text-[12px] text-[#36463E]"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.15 }}
        >
          {precioMensual}
        </motion.h3>
        <motion.h3 
          className="text-[12px] text-[#36463E]"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          {precioClase}
        </motion.h3>
      </motion.div>
      <motion.a
        href={urlWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-xs font-medium bg-[#36463E] absolute bottom-4 right-13 p-2 rounded-lg shadow-md active:shadow-inner"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.25 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Consultar
      </motion.a>
      <motion.button 
        onClick={() => accionCerrar()}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img
          className="my-2 absolute right-[4vw] bottom-[2vh]"
          src="/img/cerrarInfo.svg"
          alt="cruz"
        />
      </motion.button>
    </motion.div>
  );
};

export default InfoClasesAbierta;
