import '@testing-library/jest-dom';
import { screen, render } from "@testing-library/react";
import { Provider } from 'react-redux';
import CuisineCard from '../components/CuisineCard';
import appStore from "../utils/appStore"
import { BrowserRouter } from 'react-router';
import mockRandomMeal from "../__mocks__/mockRandomMeal.json"

describe ("Cuisine Card Component" , ()=> {
  beforeEach (() => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <CuisineCard cuisine={mockRandomMeal.meals[0]} />
        </BrowserRouter>
      </Provider>
    )
  })

  it ("should render img on the cuisine card", () => {
    const recipeImg = screen.getByTestId("recipe-img");
    expect(recipeImg).toBeInTheDocument();
  });

    it ("should render see recipe button on the cuisine card", () => {
    const recipeButton = screen.getByRole("button", {name: "See Recipe"});
    expect(recipeButton).toBeInTheDocument();
  });


})