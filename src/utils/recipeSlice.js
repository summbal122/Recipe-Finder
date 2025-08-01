import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipe: null,
  },
  reducers: {
    addRecipe: (state, action) => {
      state.recipe = action.payload;
    },
  },
});

export const { addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;