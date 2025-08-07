import { render, screen,fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router";
import Main from "../components/Main"
import Recipes from "../components/Recipes"
import appStore from "../utils/appStore"
import mockRecipesCategories from "../__mocks__/mockRecipesCategories"
import mockRandomMeal from "../__mocks__/mockRandomMeal.json"
import mockCategoryMeal from "../__mocks__/mockCategoryMeal.json"
import { act } from "react";
import '@testing-library/jest-dom';

beforeEach(() => {
  global.fetch = jest.fn((url) => {
    if (url.includes("random.php")) {
      return Promise.resolve({
        json: () => Promise.resolve(mockRandomMeal),
      });
    } else if (url.includes("categories.php")) {
      return Promise.resolve({
        json: () => Promise.resolve(mockRecipesCategories),
      });
    } else if (url.includes("filter.php?c=Chicken")) {
      return Promise.resolve({
        json: () => Promise.resolve(mockCategoryMeal),
      });
    }
    return Promise.reject(new Error("Unhandled fetch request: " + url));
  });
});


describe ("Recipes Page" , () => {
  beforeEach( async ()=> {
    await act(async ()=> {
          render(
      <Provider store = {appStore}>
         <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/recipes" element={<Recipes />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    ) 
  });
    })

  it("should render recipes page on click of the recipes button", () => {
    const exploreRecipesButton = screen.getByTestId("explore-recipes");
    fireEvent.click(exploreRecipesButton);
    
    const heading = screen.getByText("Discover delicious recipes by category or by their starting letter.");
    expect(heading).toBeInTheDocument()
    
  })

   it("should render recipes categories on the recipe page", () => {
    const exploreRecipesButton = screen.getByTestId("explore-recipes");
    fireEvent.click(exploreRecipesButton);
    
    const recipeCategories = screen.getAllByTestId("category-button");
    expect(recipeCategories.length).toBe(15);
  });

  it("should render recipes of the chicken category", async () => {
  const exploreRecipesButton = screen.getByTestId("explore-recipes");
  fireEvent.click(exploreRecipesButton);
  const chickenCategory = screen.getByText("Chicken");
  await act(async () => {
    fireEvent.click(chickenCategory);
  });
  const cuisineCard = screen.getAllByTestId("cuisine-card");
  expect(cuisineCard.length).toBe(6);
});

})