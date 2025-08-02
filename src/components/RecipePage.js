import useFetchRecipe from "../utils/useFetchRecipe";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const RecipePage = () => {
  const recipe = useSelector((store) => store.recipe.recipe);
  const { name } = useParams();
  useFetchRecipe(name);

  if (!recipe) return <p className="text-center text-gray-500 text-lg mt-10">Loading recipe...</p>;

  // Extract ingredients with measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure?.trim() || ""} ${ingredient.trim()}`);
    }
  }
  return (
    <div className="bg-white min-h-screen p-6 mt-20">
    <div className="flex items-center space-x-2 mb-8">
       <img src={recipe.strMealThumb} alt={recipe.strMeal}
       className="w-20 rounded-full shadow-lg"
      />
      <h1 className="text-2xl font-extrabold text-gray-800">
        {recipe.strMeal}
      </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-12">
           {/* YouTube Video */}
        <div className="col-span-7 flex justify-center items-start">
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-md"
              src={recipe.strYoutube?.replace("watch?v=", "embed/")}
              title={recipe.strMeal}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
     
        {/* Ingredients */}
        <div className="col-span-5 ml-15">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2 h-96 overflow-y-scroll text-gray-700">
            {ingredients.map((item, index) => (
              <li key={index} className="pl-1">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-1 text-gray-700">Instructions</h2>
        <p className="text-gray-800 leading-relaxed whitespace-pre-line bg-white p-6 rounded-xl shadow-md">
          {recipe.strInstructions}
        </p>
      </div>
    </div>
  );
};

export default RecipePage;
