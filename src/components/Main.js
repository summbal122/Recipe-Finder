import IMG from "../../images/burger.png"
import { Link } from "react-router"
const Main = () => {
  return (
     <div className='bg-primary flex flex-col items-center mx-auto pb-10 -mt-10'>
        <img className='h-150 w-8/12' src={IMG}/>
        {console.log(IMG)}
         <Link to="/recipes">
         <button className="bg-white px-6 py-3 -mt-10 rounded-2xl hover:cursor-pointer">Recipes </button>
         </Link>
       </div>
  )
}

export default Main


