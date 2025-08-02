import { configureStore } from "@reduxjs/toolkit";
import handleStateReducer from "./handleStateSlice"
import cuisineReducer from "./cuisineSlice"
import recipeReducer from "./recipeSlice"
import categoryReducer from "./categorySlice"
const store = configureStore({
  reducer: {
    handleState: handleStateReducer,
    cuisine: cuisineReducer,
    recipe: recipeReducer,
    category: categoryReducer,
  }
})
export default store;