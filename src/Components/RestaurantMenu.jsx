import React, { useEffect, useState } from "react";
import Shimmer from "../Components/Shimmer";
import { useParams } from "react-router-dom";
import { RES_IMG_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");

  // const [resInfo, setresInfo] = useState(null);
  console.log(categories,"res info");
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const jsonresInfo = await data.json();
  //   setresInfo(jsonresInfo.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCardsData =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ||
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards ||
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[10]?.card?.card
      ?.itemCards;
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    ?.itemCards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  // console.log(resInfo, "itemCardsData");

  return (
    <div className="mt-8 w-6/12 text-center m-auto border border-solid border-black">
      <img
        src={RES_IMG_URL + cloudinaryImageId}
        alt="res_img"
        className="w-64 m-auto"
      />
      <p className="font-bold text-2xl my-4">{name}</p>
      <p className="font-semibold text-md my-2">
        {cuisines.join(" | ")} &nbsp; <span>{costForTwoMessage}</span>
      </p>
      &nbsp;
      
    {/*  <h5>
        LIST OR DISHES :-
        {itemCardsData.map((items) => (
          <ul>
            <li key={items?.card?.info?.id}>
              {items?.card?.info?.name} -{" "}
              {items?.card?.info?.defaultPrice / 100 + " ₹" ||
                items?.card?.info?.price / 100 + " ₹"}
            </li>
          </ul>
        ))}
      </h5> */}
    </div>
  );
};

export default RestaurantMenu;
