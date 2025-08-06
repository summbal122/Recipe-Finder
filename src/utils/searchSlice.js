import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchedRecipes: [],
  },
  reducers: {
    setSearchedRecipes: (state, action) => {
      state.searchedRecipes = action.payload;
    },
  },
});

export const { setSearchedRecipes } = searchSlice.actions;
export default searchSlice.reducer;
