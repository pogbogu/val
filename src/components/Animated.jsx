import { motion } from "framer-motion";

const flowerVariants = {
  hidden: { opacity: 0, y: 50, rotate: 0 },
  visible: {
    opacity: 1,
    y: -500,
    rotate: 360,
    transition: { duration: 6, ease: "linear" },
  },
};

const AnimatedFlowers = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.img
          key={i}
          src="/flower.jpg"
          alt="Flower"
          initial="hidden"
          animate="visible"
          variants={flowerVariants}
          className="absolute w-12 opacity-80"
          style={{
            left: Math.random() * 100 + "vw",
            animationDuration: Math.random() * 4 + 3 + "s",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedFlowers;
