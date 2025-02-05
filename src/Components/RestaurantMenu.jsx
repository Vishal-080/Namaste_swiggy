import React, { useEffect, useState } from "react";
import Shimmer from "../Components/Shimmer";
import { useParams } from "react-router-dom";
import { RES_IMG_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  // const [showItemList, setShowItemList] = useState(false);

  
  const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" || c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  // const [resInfo, setresInfo] = useState(null);

  // console.log(categories,"res info");


  const resultCategories = categories?.filter((c) => c?.card?.card?.itemCards?.length >= 1);

  console.log(resultCategories, "resultCategory");



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

 

  return (
    <div className="w-6/12 text-center m-auto bg-[#202020]">
      {/* border border-solid border-black  */}
      <img
        src={RES_IMG_URL + cloudinaryImageId}
        alt="res_img"
        className="w-64 m-auto mt-5"
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

      {
        resultCategories.map((category, index)=> (
          <RestaurantCategory key={category?.card?.card?.title
          } data={category?.card?.card} showItemList={index == 0 ? true : "" } />
        ))
      }
    </div>
  );
};

export default RestaurantMenu;
