import { configureStore } from "@reduxjs/toolkit";
import handleStateReducer from "./handleStateSlice"
import cuisineReducer from "./cuisineSlice"
import recipeReducer from "./recipeSlice"
import categoryReducer from "./categorySlice"
import favRecipesReducer from "./favRecipeSlice"
import searchReducer from "./searchSlice"
const store = configureStore({
  reducer: {
    handleState: handleStateReducer,
    cuisine: cuisineReducer,
    recipe: recipeReducer,
    category: categoryReducer,
    favRecipe: favRecipesReducer,
    search: searchReducer,
  }
})
export default store;