import React, { useEffect, useState } from "react";
import Shimmer from "../Components/Shimmer";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const [itemCards, setItemCards] = useState(""); 

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=393840&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonMenuData = await data.json();
    console.log(jsonMenuData.data, "my menu data");
    setMenuData(jsonMenuData.data);
  };

  if (menuData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuData?.cards[2]?.card?.card?.info;

  const itemCardsData  = menuData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info.name;

  setItemCards(itemCardsData);

  return (
    <div className="menu">
      <h2>{name}</h2>
      <h3>{cuisines.join(" | ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h4>{itemCards}</h4>
    </div>
  );
};

export default RestaurantMenu;
