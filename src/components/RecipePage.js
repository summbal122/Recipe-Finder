
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import useFetchRecipe from "../utils/useFetchRecipe";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RecipesShimmer from "./RecipeShimmer";

const RecipePage = () => {
  const recipe = useSelector((store) => store.recipe.recipe);
  const { name } = useParams();
  useFetchRecipe(name);
   const [showMessage, setShowMessage] = useState(false);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowMessage(true);
      }, 500); 
      const hideTimeout = setTimeout(() => {
        setShowMessage(false);
      }, 4000); 
      return () => {
        clearTimeout(timeout);
        clearTimeout(hideTimeout);
      };
    }, []);


  if (!recipe)
    return (
     <RecipesShimmer />
    );

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        name: ingredient.trim(),
        measure: measure?.trim() || "",
        image: `https://www.themealdb.com/images/ingredients/${ingredient.trim()}.png`,
      });
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen px-2 md:px-6 py-8 ">
       <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute right-2 top-4/12 bg-dark-primary px-6 py-3 rounded-xl shadow-md text-lg font-medium flex items-center gap-2"  >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3720/3720823.png"
              alt="chef"
              className="w-6 h-6"
            />
            <span className="text-sm text-white">Hi, Good luck with your recipe!</span>
          </motion.div>
        )}
      </AnimatePresence>
     
      <div className="flex flex-col md:flex-row gap-3 md:gap-8 mt-20">
        <img data-testid ="recipe-img" src={recipe.strMealThumb} alt={recipe.strMeal}
          className=" h-40 w-5/12 md:h-120 rounded-2xl shadow-xl" />
        <div>
          <h1 className="text-lg md:text-4xl font-extrabold text-gray-900 mb-2">
            {recipe.strMeal}
          </h1>
          <p className="text-xs md:text-md text-gray-600 mb-4 italic">
            Category: {recipe.strCategory} | Area: {recipe.strArea}
          </p>
          <p className="text-gray-700 text-sm leading-relaxed max-w-xl">
            {recipe.strInstructions.slice(0, 200)}...
          </p>

          {/* Ingredients */}
         <div>
        <h2 className="text-lg md:text-2xl font-semibold  text-gray-800 mt-3">Ingredients</h2>
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-2">
          {ingredients.map((item, index) => (
         <div data-testid="recipe-ingredient" key={index}
              className="bg-light-primary/10 p-1 rounded-xl shadow hover:shadow-md transition text-center mt-2">
             {item.image ? (
      <img
        src={item.image} alt={item.name}
        className="w-6 mx-auto mb-1 object-contain"/>
    ) : null}
        <p className="text-xs font-medium text-gray-800">{item.name}</p>
        <p className="text-xs text-gray-500">{item.measure}</p>
            </div>
          ))}
        </div>
      </div>
        </div> 

      </div>

      {/* YouTube Video */}
      <div className=" my-3 md:my-10 flex flex-col md:flex-row justify-between gap-5">
      <div>
        <h2 className="text-lg md:text-2xl font-semibold mb-1 md:mb-4 text-gray-800">Instructions</h2>
        <p className="text-gray-800 text-xs md:text-sm leading-relaxed whitespace-pre-line bg-white p-3 md:p-6 rounded-xl shadow-md">
          {recipe.strInstructions}
        </p>
      </div>
      {recipe.strYoutube ? (
         <iframe
          className="md:w-4/12 h-70 md:h-90 aspect-video rounded-xl shadow-lg"
          src={recipe.strYoutube?.replace("watch?v=", "embed/")}
          title={recipe.strMeal}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="w-4/12 h-90 text-dark-primary flex  items-center justify-center ">
          <p >Video not available</p> </div>
      ) }
       
      </div>
    
    
    </div>
  );
};

export default RecipePage;