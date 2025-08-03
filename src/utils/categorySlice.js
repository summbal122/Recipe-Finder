
import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [], 
    categoryName: "",
    category: [] ,
    searchLetter: "",

  },
  reducers: {
    addCategories: (state, action) => {
      state.categories = action.payload;
    },
    addCategory: (state, action) => {
      state.category = action.payload;
    }, 
    addCategoryName: (state, action) => {
      state.categoryName = action.payload;
    },
      addSearchLetter: (state, action) => {
      state.searchLetter = action.payload;
    }
  }
});

export const { addCategories, addCategory , addCategoryName, addSearchLetter, addLetterRecipes} = categorySlice.actions;
export default categorySlice.reducer;
