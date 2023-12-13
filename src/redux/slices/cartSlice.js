import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, actions) => {
      state.push(actions.payload);
    },
  },
});
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
