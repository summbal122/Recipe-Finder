import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const Main = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(false);
      setTimeout(() => setShowImage(true), 1000); // 1s delay before reappearing
    }, 4000); // total loop duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-light-primary/40 flex flex-col justify-center items-center h-screen w-full overflow-hidden">
      <div className="w-8/12 h-100 flex justify-center items-center relative">
        <AnimatePresence>
          {showImage && (
            <motion.img
              key={Date.now()} // forces remount for re-animation
              src="https://img.pikbest.com/element_our/20220530/bg/c7e6ec132b6fa.png!sw800"
              initial={{ x: 300, opacity: 0, rotate: -10 }}
              animate={{
                x: 0,
                opacity: 1,
                rotate: [0, 5, -5, 3, -3, 0],
                transition: { duration: 1 },
              }}
              exit={{
                x: -300,
                opacity: 0,
                rotate: 10,
                transition: { duration: 1 },
              }}
              className="absolute h-full w-full object-cover"
            />
          )}
        </AnimatePresence>
      </div>

      <Link to="/recipes">
        <button className="px-6 py-3 mt-6 rounded-2xl hover:cursor-pointer bg-white text-black flex items-center gap-1 hover:shadow-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7065/7065552.png"
            className="w-8"
            alt="icon"
          />
          <span className="font-light">Recipes</span>
        </button>
      </Link>
    </div>
  );
};

export default Main;
