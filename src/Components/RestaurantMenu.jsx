import React, { useEffect } from "react";

const RestaurantMenu = () => {

  useEffect(()=> {
    fetchMenu();
  },[]);
   
  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=393840&catalog_qa=undefined&submitAction=ENTER");
    const jsonMenuData = data.json();
  }

  return (
    <div className="menu">
      <div>RestaurantMenu</div>
      <h2>Name of the restaurant</h2>
      <h3>MENU</h3>
      <ul>
        <li>DOSA</li>
        <li>SAMOSA</li>
        <li>SANDWICH</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
