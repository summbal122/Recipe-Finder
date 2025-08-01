import IMG from "../../images/burger.png";
import { Link } from "react-router";

const Main = () => {
  return (
    <div className="bg-primary flex flex-col justify-center items-center h-screen w-full overflow-hidden">
      <img className="h-140 w-8/12 mt-9" src={IMG} alt="Dish" />
      <Link to="/recipes">
        <button className="bg-white px-6 py-3 -mt-8 rounded-2xl hover:cursor-pointer">
          Recipes
        </button>
      </Link>
    </div>
  );
};

export default Main;
