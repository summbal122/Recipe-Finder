import {fireEvent,render, screen } from "@testing-library/react";
import CuisinesPage from "../components/CuisinesPage";
import { Provider } from "react-redux";
import appStore from "../utils//appStore"
import Header from "../components/Header";
import { MemoryRouter, Route, Routes } from "react-router";
import mockChineseCuisines from "../__mocks__/mockChineseCuisines.json"
import { act } from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockChineseCuisines),
  })
);

describe ("Cuisines Page", () => {
  beforeEach(async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
         <MemoryRouter initialEntries={["/cuisine/Chinese"]}>
          <Header />
          <Routes>
            <Route path="/cuisine/:name" element={<CuisinesPage />} />
          </Routes>
        </MemoryRouter>
   
      </Provider>
    )
  });
})

  it ("should render 8 cuisines cards in the cuisines page", () => {
   const toogle = screen.getAllByTestId("toogle-cuisines");
    fireEvent.click(toogle[0]);
     const chineseCuisine = screen.getByText("Chinese");
    fireEvent.click(chineseCuisine);
    const cuisineCard = screen.getAllByTestId("cuisine-card");
    expect (cuisineCard.length).toBe(8);
  })
  

})