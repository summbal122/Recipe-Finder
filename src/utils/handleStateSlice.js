import { createSlice } from "@reduxjs/toolkit";
const handleStateSlice = createSlice({
  name:"state",
  initialState: {
    showItems : false,
    handleQuery: "",
  },

reducers : {
       handleShowItems : (state,action) => {
        state.showItems = action.payload;
       },
       handleSetQuery : (state, action) => {
        state.handleQuery = action.payload

       }
}})

export const {handleShowItems, handleSetQuery} = handleStateSlice.actions
export default handleStateSlice.reducer;