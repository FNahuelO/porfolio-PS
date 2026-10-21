import { motion, useAnimation } from "framer-motion";
import { memo, useEffect } from "react";

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const AnimatedBubble = ({ index, color }) => {
  const controls = useAnimation();

  const size = 300;

  const moveBubble = async () => {
    while (true) {
      const x = getRandom(-150, 100); // px hacia los lados
      const y = getRandom(-350, 150); // px arriba o abajo

      await controls.start({
        x,
        y,
        scale: Math.random() * 0.5 + 0.75, // Escala aleatoria
        transition: {
          duration: getRandom(5, 10),
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
        background: color,
        top: `${getRandom(10, 80)}%`,
        left: `${getRandom(10, 80)}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      animate={controls}
    />
  );
};

const AnimatedBubbles = memo(() => {
  const colors = ["#5D80F5", "#FB980F54"];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {colors.map((color, i) => (
        <AnimatedBubble key={i} index={i} color={color} />
      ))}
    </div>
  );
});

export default AnimatedBubbles;
