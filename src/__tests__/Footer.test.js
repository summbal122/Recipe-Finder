import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Footer from "../components/Footer"
import appStore from "../utils/appStore"

describe ("Footer Component" , ()=> {
  beforeEach (() => {
    render(
      <Provider store={appStore}>
        <Footer/>
      </Provider>
    )
  })

  it ("should render 4 social icons on the footer", () => {
    const socialIcons = screen.getAllByTestId("social-icon");
    expect (socialIcons.length).toBe(4)
  });

   it ("should render 4 navigation links on the footer", () => {
    const navLinks = screen.getAllByTestId("nav-links");
    expect (navLinks.length).toBe(4)
  });

   it ("should render the text on the footer", () => {
    const displayText = screen.getByText("Find delicious recipes that match your mood. Simple, fast, and flavorful!");
    expect(displayText).toBeInTheDocument();
  })

})