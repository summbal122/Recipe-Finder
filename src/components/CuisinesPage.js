import { useSelector } from "react-redux";
import CuisineCard from "./CuisineCard";
import { useParams } from "react-router";
import useFetchCuisine from "../utils/useFetchCuisine";
import CardShimmer from "./CardShimmer";
const CuisinesPage = () => {
  const { name } = useParams(); 
  useFetchCuisine(name);
  const cuisines = useSelector((store) => store.cuisine.cuisines);
  return (
    <div className="bg-gray-50">
    <div className="p-3 md:p-5 mt-5 min-h-screen">
    { cuisines.length > 0 ? (
  <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
    {cuisines.map((c) => (
        <CuisineCard key={c.idMeal} cuisine={c} />
    ))}
  </div>
) : (
  <CardShimmer count={20} />
)}
    </div>
  </div>
  )};

export default CuisinesPage;
