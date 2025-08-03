import Header from "./components/Header"
import Main from "./components/Main"
import RecipePage from "./components/RecipePage"
import Body from "./components/Body"
import Footer from "./components/Footer"
import CuisinesPage from "./components/CuisinesPage"
import Recipes from "./components/Recipes"
import { createBrowserRouter, RouterProvider } from "react-router"
const AppLayout = () => {
  return (
    <div className="">
    <Header/>
    <Body/>
    </div>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/", 
        element: <Main />,
      }, {
        path: "/recipe/:name",
        element: <>
        <RecipePage/>
         <Footer/>
        </>
      }, 
      {
        path: "/cuisine/:name",
        element:<>
        <CuisinesPage/>
        <Footer/>
        </>
      },
        {
        path: "/recipes",
        element:<>
        <Recipes/>
        <Footer/>
        </>
      }
    ],
  },
]);

const App = () => {
  return (
  <RouterProvider router={appRouter}></RouterProvider>
  )
}

export default App;
