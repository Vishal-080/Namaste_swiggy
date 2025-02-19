import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center w-6/12 m-auto my-4">
      <h1 className="font-semibold text-xl">My Cart</h1>
      <button
        className="px-4 py-2 text-center m-2 rounded-lg bg-black text-white cursor-pointer"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 ? <h1>Sorry, your Cart is Empty...!<br/>Please add Items to your Cart</h1> : " "}
      <ItemList items={cartItems}></ItemList>
    </div>
  );
};

export default Cart;