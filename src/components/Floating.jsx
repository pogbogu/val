import { useEffect, useState } from "react";

const FloatingHearts = ({ children }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHeart = () => {
      setHearts((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * 100 + "vw",
        },
      ]);
      setTimeout(() => {
        setHearts((prev) => prev.slice(1));
      }, 5000);
    };

    const interval = setInterval(generateHeart, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-red-500 text-4xl animate-heart"
          style={{ left: heart.left }}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
