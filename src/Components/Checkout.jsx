import React from "react";

const Checkout = () => {
  return (
    <div className="w-6/12 m-auto">
      <h1 className="font-bold text-xl m-2 text-center">Check-Out</h1>
      <div className="my-2 py-6 border flex flex-col">
        <h1 className="font-bold text-lg mb-4 text-center">Address details</h1>
        <div className="w-9/12 m-auto">
          <div className="flex justify-between">
            <label htmlFor="house-no">House no./Street name :-</label>
            <input type="text" name="house-no" required/>
          </div>
          <br />
          <div className="flex justify-between">
            <label htmlFor="address">Address :- </label>
            <input type="text" name="address" required/>
          </div>
          <br />
          <div className="flex justify-between">
            <label htmlFor="city">City :- </label>
            <input type="text" name="city" required/>
          </div>
        </div>
        <br />
        <button className="bg-blue-500 w-4/12 m-auto rounded-lg p-2 font-medium cursor-pointer hover:bg-blue-600">Confirm Address</button>
      </div>
      <div>
        <label htmlFor="upi">Select UPI</label>
        <input type="checkbox" name="gpay" />
        <label htmlFor="gpay">G-pay</label>
        <input type="checkbox" name="paytm" />
        <label htmlFor="paytm">Paytm</label>
        <input type="checkbox" name="phonepe" />
        <label htmlFor="phonepe">Phone-Pe</label>
      </div>
    </div>
  );
};

export default Checkout;
