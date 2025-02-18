import React from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="font-bold text-2xl text-center w-6/12 m-auto">
      <h1>My Cart</h1>
      <ItemList items={cartItems}></ItemList>
    </div>
  );
};

export default Cart;