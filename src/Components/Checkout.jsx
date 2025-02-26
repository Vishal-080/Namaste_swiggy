import React from "react";

const Checkout = () => {
  return (
    <div className="">
        <h1>Check-Out</h1>
      <div>
        <h1>Address details</h1>
        <label htmlFor="house-no">House no./Street name</label>
        <input type="text" name="house-no"/>
        <label htmlFor="address">Address</label>
        <input type="text" name="address" />
        <label htmlFor="city">City</label>
        <input type="text" name="city" />
        <button>Confirm Address</button>
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
