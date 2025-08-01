const CuisineCard = ({ cuisine }) => {
  return (
    <div>
      <div className="p-4 shadow-lg" key={cuisine.idMeal}> 
        <img className="rounded-4xl" src={cuisine.strMealThumb} />
        <p className="font-semibold mt-2">{cuisine.strMeal}</p> 
      </div>
    </div>
  );
};

export default CuisineCard;
