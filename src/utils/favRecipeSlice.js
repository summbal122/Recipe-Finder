import { createSlice } from "@reduxjs/toolkit";

const favRecipeSlice = createSlice({
  name:"favRecipes",
  initialState:{
    favRecipes: [],
    favAdded : false,
    showFavRecipes:false,
  },
  reducers: {
   addFavRecipe: (state, action) => {
      const exists = state.favRecipes.some(
        (r) => r.idMeal === action.payload.idMeal
      );
      if (!exists) {
        state.favRecipes.push(action.payload);
      }
    },
    removeFavRecipe : (state,action) => {
      state.favRecipes = state.favRecipes.filter((recipe) => recipe.idMeal !==action.payload)
    },
    clearFavRecipes : (state) => {
      state.favRecipes = []
    },
    setFavAdded : (state,action) => {
        state.favAdded = action.payload;
       },
    setShowFavRecipes : (state,action) => {
    state.showFavRecipes = action.payload;
    },
  }
})
export const {addFavRecipe, removeFavRecipe, clearFavRecipes, setFavAdded, setShowFavRecipes} = favRecipeSlice.actions;
export default favRecipeSlice.reducer;