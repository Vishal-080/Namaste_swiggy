import React, { useEffect, useState } from "react";

const RestaurantMenu = () => {

  const [menuData, setMenuData] = useState("");

  const {name, cuisines, cloudinaryImageId, costForTwo} = menuData.data.cards[2].card.card.info;

  useEffect(()=> {
    fetchMenu();
  },[]);
   
  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=393840&catalog_qa=undefined&submitAction=ENTER");
    const jsonMenuData = await data.json();

    setMenuData(jsonMenuData);
  }

  return (
    <div className="menu">
      <h2>{menuData.name}</h2>
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
