import { useParams } from "react-router";
import { useSelector } from "react-redux";
import useFetchRecipe from "../utils/useFetchRecipe";

const RecipePage = () => {
  const recipe = useSelector((store) => store.recipe.recipe);
  const { name } = useParams();
  useFetchRecipe(name);

  if (!recipe)
    return (
      <p className="text-center text-gray-500 text-lg mt-10">
        Loading recipe...
      </p>
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
    <div className="bg-white min-h-screen px-6 py-8 mt-20">
     
      <div className="flex gap-8">
        <img src={recipe.strMealThumb} alt={recipe.strMeal}
          className="w-5/12 rounded-2xl shadow-xl" />
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            {recipe.strMeal}
          </h1>
          <p className="text-md text-gray-600 mb-4 italic">
            Category: {recipe.strCategory} | Area: {recipe.strArea}
          </p>
          <p className="text-gray-700 leading-relaxed max-w-xl">
            {recipe.strInstructions.slice(0, 200)}...
          </p>

          {/* Ingredients */}
         <div>
        <h2 className="text-2xl font-semibold  text-gray-800 mt-4">Ingredients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {ingredients.map((item, index) => (
            <div key={index}
              className="bg-light-primary/10 p-1 rounded-xl shadow hover:shadow-md transition text-center mt-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-8 mx-auto mb-2 object-contain" />
              <p className="text-xs font-medium text-gray-800">{item.name}</p>
              <p className="text-xs text-gray-500">{item.measure}</p>
            </div>
          ))}
        </div>
      </div>
        </div> 

      </div>

      {/* YouTube Video */}
      <div className="my-10 flex gap-8">
             {/* Instructions */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Instructions</h2>
        <p className="text-gray-800 leading-relaxed whitespace-pre-line bg-white p-6 rounded-xl shadow-md">
          {recipe.strInstructions}
        </p>
      </div>
        <iframe
          className="w-4/12 aspect-video rounded-xl shadow-lg"
          src={recipe.strYoutube?.replace("watch?v=", "embed/")}
          title={recipe.strMeal}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    
    
    </div>
  );
};

export default RecipePage;