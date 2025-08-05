import { useSelector } from "react-redux";
import CuisineCard from "./CuisineCard";
import { Link, useParams } from "react-router";
import useFetchCuisine from "../utils/useFetchCuisine";
import CardShimmer from "./CardShimmer";
const CuisinesPage = () => {
  const { name } = useParams(); 
  useFetchCuisine(name);
  const cuisines = useSelector((store) => store.cuisine.cuisines);
  return (
    <div className="bg-gray-50">
    <div className="p-6 min-h-screen">
    { cuisines.length > 0 ? (
  <div className="mt-20 grid grid-cols-5">
    {cuisines.map((c) => (
      <Link key={c.idMeal} to={`/recipe/${c.strMeal}`}>
        <CuisineCard cuisine={c} />
      </Link>
    ))}
  </div>
) : (
  <CardShimmer count={20} />
)}

    </div>
  </div>
  )};

export default CuisinesPage;
