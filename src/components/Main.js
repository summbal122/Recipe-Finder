import { motion} from "framer-motion";
import { Link } from "react-router";
const Main = () => {


  return (
    <div className="flex flex-col justify-center items-center h-screen w-full overflow-hidden"
      style={{  
        backgroundImage:`repeating-linear-gradient(
         90deg,
        #f5b3b1,
        #f5b3b1 20px,
        #f5b3b1 20px,
        #e89b9a 50px
        )`,
      }}  >
    <div className="flex mr-30 mt-10">
    <img src="https://images.vexels.com/media/users/3/127400/isolated/svg/43ee1cafca2f947f0be0d94aeff0fc26.svg" alt="kawaii chef" className="w-sm mb-2 hover:scale-105" />
    <div className="flex flex-col justify-center items-center gap-8">
     <motion.h1
        className="text-5xl font-semibold text-red-900 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}>
        Discover Delicious Recipes<br />
        with <span className="text-dark-primary italic">Recipe Finder</span>
      </motion.h1>

      <Link to="/recipes">
        <button className="px-8 py-3 rounded-full bg-white hover:scale-105 hover:cursor-pointer text-dark-primary flex gap-2 items-center shadow-lg transition duration-300 ease-in-out">
          <img src="https://cdn-icons-png.flaticon.com/512/7065/7065552.png" className="w-5" />
          Explore Recipes
        </button>
      </Link>
    </div>
    </div>
    </div>
   );
  };

export default Main;
