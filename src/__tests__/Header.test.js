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

  it("Should render 6 nav links in the header", ()=> {
   const navLinks = screen.getAllByTestId("nav");
  expect (navLinks.length).toBe(6)
  })

   it("Should render 24 cuisines in the header", ()=> {
  const toogle = screen.getAllByTestId("toogle-cuisines");
  fireEvent.click(toogle[0]);
   const navLinks = screen.getAllByTestId("cuisine");
  expect (navLinks.length).toBe(19)
  })

  it("Should render 2  input form in the header", ()=> {
  const form = screen.getAllByTestId("input-form");
  expect(form.length).toBe(2)
  })

  it("Should render fav recipes in the header", ()=> {
  const favRecipes = screen.getAllByTestId("fav-recipes");
  expect(favRecipes.length).toBe(2);
  })

})
