import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const AnimatedBubble = ({ index }) => {
  const controls = useAnimation();

  // Generar un tamaño aleatorio para la burbuja
  const size = getRandom(100, 250); // Tamaño entre 40px y 100px

  const moveBubble = async () => {
    while (true) {
      const x = getRandom(-150, 150); // px hacia los lados
      const y = getRandom(-350, 200); // px arriba o abajo

      await controls.start({
        x,
        y,
        scale: Math.random() * 0.5 + 0.75, // Escala aleatoria
        transition: {
          duration: getRandom(3, 10),
          ease: "easeInOut",
        },
      });
    }
  };

  useEffect(() => {
    moveBubble();
  }, []);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        background:
          "linear-gradient(200.29deg, #F9CE38 13.5%, #FA8A28 76.12%, #FC210D 125.7%)",
        top: `${getRandom(10, 80)}%`,
        left: `${getRandom(10, 80)}%`,
        width: `${size}px`, // Aplicar tamaño aleatorio
        height: `${size}px`, // Aplicar tamaño aleatorio
      }}
      animate={controls}
    />
  );
};

export default function AnimatedBubbles() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {Array.from({ length: 4 }).map((_, i) => (
        <AnimatedBubble key={i} index={i} />
      ))}
    </div>
  );
}
