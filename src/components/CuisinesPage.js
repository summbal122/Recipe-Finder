import { useSelector } from "react-redux";
import CuisineCard from "./CuisineCard";
import { Link, useParams } from "react-router";
import useFetchCuisine from "../utils/useFetchCuisine";
const CuisinesPage = () => {
  const { name } = useParams(); 
  useFetchCuisine(name);
  const cuisines = useSelector((store) => store.cuisine.cuisines);
  if (!cuisines || cuisines.length === 0) {
    return <p className="text-center text-gray-500 mt-20">No cuisines found for {name}.</p>;
  }
  return (
    <div className="grid grid-cols-4 gap-6 justify-center p-6 min-h-screen mt-20">
      {cuisines.map((c) => (
        <Link key={c.idMeal}  to={`/recipe/${c.strMeal}`}> <CuisineCard cuisine={c} /> </Link>
      ))}
    </div>
  );
};

export default CuisinesPage;
