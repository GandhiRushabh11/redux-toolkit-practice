import React from "react";
import { getItemsSelector } from "../redux/slices/cartSlice";
import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector(getItemsSelector);
  const total = cart.reduce((a, b) => a + b.price, 0);
  return (
    <div className="alert alert-success">
      <h3 className="text-center">
        Total Items: {cart.length} (Rs. {total})/-
      </h3>
    </div>
  );
};

export default Cart;
