import { createSlice } from "@reduxjs/toolkit";
const cuisineSlice = createSlice({
  name:"cuisines",
  initialState: {
    cuisines : [],
    cuisine : ""
  },
reducers : {
       addCuisineList : (state,action) => {
        state.cuisines = action.payload;
       },
        addCuisine : (state,action) => {
        state.cuisine = action.payload;
       }
}})

export const {addCuisine, addCuisineList} = cuisineSlice.actions;
export default cuisineSlice.reducer;