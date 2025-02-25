import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartTotal from "./CartTotal";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  // console.log(cartItems[0]?.card?.info.price/100, "cart items");

  const price = cartItems.map(
    (items) =>
      items?.card?.info.price / 100 || items?.card?.info.defaultPrice / 100
  );

  useEffect(() => {
    let sum = 0;
    price.forEach((el) => {
      sum += el;
    });

    setTotal(sum);

    console.log("total", total);
  }, []);

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
      {cartItems.length === 0 ? (
        <h1>
          Sorry, your Cart is Empty...!
          <br />
          Please add Items to your Cart
        </h1>
      ) : (
        " "
      )}
      <ItemList items={cartItems}></ItemList>
      {cartItems.length !== 0 ?  <CartTotal total={total} /> : ""}
     
    </div>
  );
};

export default Cart;
