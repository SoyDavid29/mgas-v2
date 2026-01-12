import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Slider: React.FC = () => {

  const gallery: string[] = [
    "/img/imagen1.png",
    "/img/imagen2.png",
    "/img/imagen3.png",
    "/img/imagen4.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % gallery.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [gallery.length]);

  return (
    <div className="relative w-full h-145 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={gallery[index]}
          src={gallery[index]}
          alt="gallery image"
          className=" absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Slider;
