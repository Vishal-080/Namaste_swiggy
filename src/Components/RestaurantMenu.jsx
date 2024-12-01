import React, { useEffect, useState } from "react";
import Shimmer from "../Components/Shimmer";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=393840&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonMenuData = await data.json();
    setMenuData(jsonMenuData.data);
  };

  if (menuData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuData?.cards[2]?.card?.card?.info;

  const itemCardsData =
    menuData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

      console.log(itemCardsData);
  return (
    <div className="menu">
      <h2>{name}</h2>
      <h3>{cuisines.join(" | ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h4>
        LIST OR DISHES :-
        <span>
          {itemCardsData.map((items) => (
            <ul>
              <li key={items?.card?.info?.id}>{items.card?.info?.name}</li>
            </ul>
          ))}
        </span>
      </h4>
    </div>
  );
};

export default RestaurantMenu;
