import React, { useEffect, useState } from "react";
import Shimmer from "../Components/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();
  const  resInfo  = useRestaurantMenu(resId);

  console.log(resInfo?.cards[2],"res info menu");
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const jsonresInfo = await data.json();
  //   setresInfo(jsonresInfo.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCardsData =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ||
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards ||
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[10]?.card
      ?.card?.itemCards;
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    ?.itemCards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  console.log(resInfo, "itemCardsData");

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
                {items?.card?.info?.defaultPrice / 100 + " ₹" ||
                  items?.card?.info?.price / 100 + "₹"}
              </li>
              <li>{items}</li>
            </ul>
          ))}
        </span>
      </h4>
    </div>
  );
};

export default RestaurantMenu;
