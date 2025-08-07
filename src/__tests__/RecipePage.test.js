import '@testing-library/jest-dom';
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import CuisineCard from '../components/CuisineCard';
import RecipePage from "../components/RecipePage";
import appStore from "../utils/appStore"
import { MemoryRouter, Route, Routes } from 'react-router';
import mockRandomMeal from "../__mocks__/mockRandomMeal.json"
import { act } from 'react';

describe("Recipe Page Component", () => {
  beforeEach(async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ meals: [mockRandomMeal.meals[0]] }),
      })
    );

    await act(async () => {
      render(
        <Provider store={appStore}>
          <MemoryRouter initialEntries={["/"]}>
            <Routes>
              <Route path="/" element={<CuisineCard cuisine={mockRandomMeal.meals[0]} />} />
              <Route path="/recipe/:name" element={<RecipePage />} />
            </Routes>
          </MemoryRouter>
        </Provider>
      );
    });
  });

  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it("should render img on the recipe page", async () => {
  const recipeButton = screen.getByRole("button", { name: "See Recipe" });
  await act(async () => {
    fireEvent.click(recipeButton);
  });
  const recipePageImg = await screen.findByTestId("recipe-img");
  expect(recipePageImg).toBeInTheDocument();
});

  it("should render 9 ingredients on the recipe page", async () => {
  const recipeButton = screen.getByRole("button", { name: "See Recipe" });
  await act(async () => {
    fireEvent.click(recipeButton);
  });
  const recipeIngredients = screen.getAllByTestId("ingredient");
  expect(recipeIngredients.length).toBe(9)
});

  it("should render Japanese area on the recipe page", async () => {
  const recipeButton = screen.getByRole("button", { name: "See Recipe" });
  await act(async () => {
    fireEvent.click(recipeButton);
  });
  const recipeArea = screen.getByText(/Japanese/i);
  expect(recipeArea).toBeInTheDocument();
});

})