import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state);
  const total = cart.cart.reduce((a, b) => a + b.price, 0);
  return (
    <div className="alert alert-success">
      <h3 className="text-center">
        Total Items: {cart.cart.length} (Rs. {total})/-
      </h3>
    </div>
  );
};

export default Cart;
