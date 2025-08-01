import { configureStore } from "@reduxjs/toolkit";
import handleStateReducer from "./handleStateSlice"
import cuisineReducer from "./cuisineSlice"
import recipeReducer from "./recipeSlice"
const store = configureStore({
  reducer: {
    handleState: handleStateReducer,
    cuisine: cuisineReducer,
    recipe: recipeReducer,
  }
})
export default store;