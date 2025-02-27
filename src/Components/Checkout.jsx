import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();

  const handleConfirmAddress = (e) => {
    e.preventDefault();
    alert("Address Confirmed...!");
  };

  const handlePayAndPlaceOrder = () => {
    alert("Thank you for ordering with Us...!");
    dispatch(clearCart());
  };

  return (
    <div className="w-7/12 m-auto flex flex-col">
      <h1 className="font-bold text-xl m-2 text-center">Check-Out</h1>
      <div className="my-2 py-6 flex flex-col">
        <h1 className="font-bold text-lg mb-4 text-center">Address details</h1>
        <div className="w-9/12 m-auto">
          <div className="flex justify-between">
            <label htmlFor="house-no">House no./Street name :-</label>
            <input
              type="text"
              name="house-no"
              placeholder="Enter House No...."
              className="indent-2"
              required
            />
          </div>
          <br />
          <div className="flex justify-between">
            <label htmlFor="address">Address :- </label>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              className="indent-2"
              required
            />
          </div>
          <br />
          <div className="flex justify-between">
            <label htmlFor="city">City :- </label>
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              className="indent-2"
              required
            />
          </div>
        </div>
        <br />
        <input
          className="btn text-white bg-blue-500 w-4/12 m-auto rounded-lg p-2 font-medium cursor-pointer hover:bg-blue-600"
          onClick={(e) => handleConfirmAddress(e)}
          type="submit"
          value={"Confirm Address"}
        />
      </div>
      <div className=" flex justify-evenly">
        <label htmlFor="upi">Select UPI :-</label>

        <label htmlFor="gpay">
          <input type="checkbox" name="gpay" /> G-pay
        </label>

        <label htmlFor="paytm">
          <input type="checkbox" name="paytm" /> Paytm
        </label>

        <label htmlFor="phonepe">
          {" "}
          <input type="checkbox" name="phonepe" /> Phone-Pe
        </label>
      </div>
      <button
        className="btn text-white bg-blue-500 w-4/12 m-auto my-4 rounded-lg p-2 font-medium cursor-pointer hover:bg-blue-600"
        onClick={handlePayAndPlaceOrder}
      >
        <Link to="/">Pay and Place Order</Link>
      </button>
      <button class="btn bg-primary text-white">Button</button>
    </div>
  );
};

export default Checkout;
