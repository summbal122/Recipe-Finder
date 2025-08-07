import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router";

describe ("Header Component", () => {
  beforeEach (()=> {
     render (
    <Provider store={appStore}>
      <BrowserRouter>
    <Header />
    </BrowserRouter>
    </Provider>
  ) 
  });

  it("Should render 3 nav links in the header", ()=> {
   const navLinks = screen.getAllByTestId("nav");
  expect (navLinks.length).toBe(3)
  })

   it("Should render 24 cuisines in the header", ()=> {
  const toogle = screen.getByTestId("toogle-cuisines");
  fireEvent.click(toogle);
   const navLinks = screen.getAllByTestId("cuisine");
  expect (navLinks.length).toBe(19)
  })

  it("Should render  input form in the header", ()=> {
  const form = screen.getByTestId("input-form");
  expect(form).toBeInTheDocument;
  })

  it("Should render fav recipes in the header", ()=> {
  const favRecipes = screen.getByTestId("fav-recipes");
  expect(favRecipes).toBeInTheDocument;
  })

})
