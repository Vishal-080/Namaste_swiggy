import React from "react";

const CartTotal = ({ total }) => {
  return (
    <>
      <div className="border-t-2 border-gray-300 mt-8 p-2 font-semibold text-xl text-center flex justify-between items-center">
        <h1 className="mt-4">Total amount :-</h1>
        <p className="mt-4">Rs. {total} ₹</p>
      </div>
      <button className="px-4 py-2 rounded-lg bg-green-400 text-white font-medium cursor-pointer">
        Pay {total}
      </button>
    </>
  );
};

export default CartTotal;
