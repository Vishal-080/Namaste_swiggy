import React, { useEffect, useState } from "react";
import Shimmer from "../Components/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();
  
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resId);
    const jsonMenuData = await data.json();
    setMenuData(jsonMenuData.data);
  };

  if (menuData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuData?.cards[2]?.card?.card?.info;

  const itemCardsData =
    menuData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ||
    menuData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[10]?.card
      ?.card?.itemCards;

  // console.log(menuData, "itemCardsData")
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
              {console.log(items.card.info.id, "unique id")}
              <li key={items.card.info.id}>
                {items?.card?.info?.name} -{" "}
                {items?.card?.info?.price / 100 + "₹" ||
                  items?.card?.info?.defaultPrice / 100 + "₹"}
              </li>
            </ul>
          ))}
        </span>
      </h4>
    </div>
  );
};

export default RestaurantMenu;
