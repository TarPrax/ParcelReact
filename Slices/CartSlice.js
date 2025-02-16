import {  createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state,payload){
        state.push(payload);
    },
    emptyCart:(state){
state=[];
    }
  },
});

export {addItem,emptyCart} from cartSlice.actions;
export default cartSlice.reducer;

