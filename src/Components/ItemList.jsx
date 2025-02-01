import React from "react";
import { RES_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items, "items");

  return (
    <div>
      {items.map((item) => (
        <div className="border-b-2 m-2 p-2 " key={item.card.info.id}>
          <div className="flex justify-between">
            <p className="text-sm font-semibold">{item?.card?.info?.name}</p>
            <span>
              Rs.{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}{" "}
              ₹{" "}
            </span>
          </div>
          <div className="text-left text-xs py-2">
            <p>{item?.card?.info?.description}</p>
          </div>
          <img src={RES_URL + item?.card?.info?.imageId} alt="res_img" />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
