import React from "react";

const Checkout = () => {
  return (
    <div >
        <h1 className="font-bold text-xl m-2 text-center">Check-Out</h1>
      <div className="flex flex-col justify-between items-center my-2 py-6 border text-left">
        <h1 className="font-bold text-lg mb-4 text-center">Address details</h1>
        <label htmlFor="house-no">House no./Street name :-  <input type="text" name="house-no"/></label>
        <br/>
        <label htmlFor="address">Address  :-  <input type="text" name="address" /></label>
        <br/>
        <label htmlFor="city">City  :-  <input type="text" name="city" /></label>
        <br/>
        <button className="">Confirm Address</button>
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
