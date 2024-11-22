import React, { useEffect, useState } from "react";
import Shimmer from "../Components/Shimmer";

const RestaurantMenu = () => {

  const [menuData, setMenuData] = useState(null);

  // const { costForTwoMessage } = menuData?.data?.cards[2]?.card?.card?.info;

  useEffect(()=> {
    fetchMenu();
  },[]);
   
  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=393840&catalog_qa=undefined&submitAction=ENTER");
    const jsonMenuData = await data.json();
    console.log(jsonMenuData,"my menu data")
    setMenuData(jsonMenuData);
  }

  if(menuData === null ) return <Shimmer/>


  return menuData ? <Shimmer /> : (
    <div className="menu">
      <h2>{}</h2>
      {/* <h3>{cuisines}</h3> */}
      {/* <h3>{costForTwoMessage}</h3> */}
    </div>
  );
};

export default RestaurantMenu;
