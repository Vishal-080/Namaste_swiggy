import React from "react";
import { RES_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items, "items");

  const HandleAddClick = () => {
    console.log("Add to Cart clicked");
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className="border-b-2 m-2 p-2 flex justify-between items-center"
          key={item.card.info.id}
        >
          <div className="w-8/12">
            <div className="text-left">
              <span className="text-md font-semibold ">
                {item?.card?.info?.name}
              </span>
              <span>
                {" "}
                - Rs.{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}{" "}
                ₹{" "}
              </span>
            </div>
            <div className="text-left text-xs py-2">
              <p>{item?.card?.info?.description}</p>
            </div>
          </div>
          <div className="w-3/12 flex flex-col justify-between items-center">
            <img src={RES_URL + item?.card?.info?.imageId} alt="res_img" />
            <button
              className="rounded-lg bg-white text-black px-3 relative cursor-pointer"
              onClick={HandleAddClick}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
