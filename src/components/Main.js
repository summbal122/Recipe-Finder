import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const Main = () => {
   const [showImage, setShowImage] = useState(true);
 

   useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(false);
      setTimeout(() => setShowImage(true), 2000); 
    }, 7000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-light-primary/40 flex flex-col justify-center items-center h-screen w-full overflow-hidden"> 

   <div className="absolute bottom-10 w-full flex justify-center items-center z-10">
        <AnimatePresence>
          {showImage && (
            <motion.img
              key="dish-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
              src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
              alt="Featured Dish"
              className="rounded-2xl w-72 h-48 object-cover shadow-md"
            />
          )}
        </AnimatePresence>
      </div>
      <Link to="/recipes">
        <button className="px-6 py-3 rounded-2xl hover:cursor-pointer bg-white text-black flex items-center gap-1 hover:shadow-lg z-20">
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
