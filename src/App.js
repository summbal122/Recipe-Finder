import Header from "./components/Header"
import Main from "./components/Main"
import RecipePage from "./components/RecipePage"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { createBrowserRouter, RouterProvider } from "react-router"
const AppLayout = () => {
  return (
    <div className="">
    <Header/>
    <Body/>
    <Footer/>
  
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
        path: "/recipes",
        element: <RecipePage/>
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
