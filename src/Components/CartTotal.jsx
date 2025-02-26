import React from "react";
import { Link } from "react-router-dom";

const CartTotal = ({ total }) => {
  return (
    <>
      <div className="border-t-2 border-gray-300 mt-8 p-2 font-semibold text-xl text-center flex justify-between items-center">
        <h1 className="mt-4">Total amount :-</h1>
        <p className="mt-4">Rs. {total} ₹</p>
      </div>
      <button className="px-4 py-2 rounded-lg bg-green-500 text-white font-medium cursor-pointer hover:bg-green-600">
        <Link to ="/checkout">Pay {total}</Link>
      </button>
    </>
  );
};

export default CartTotal;
