import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItemList, showIndex, setShowIndex }) => {
  // console.log(data,"data   d");
  // const [showItemList, setShowItemList] = useState(false);

// console.log(showIndex,"index");

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {
        <div className="m-4 p-4 ">
          <div
            className="m-2 p-1 text-left flex justify-between items-center cursor-pointer"
            onClick={handleClick}
          >
            <div className="font-semibold text-lg">
              {data?.title} ({data?.itemCards?.length})
            </div>
            <span>🔽</span>
          </div>
          {showItemList ? <ItemList items={data?.itemCards} /> : ""}
        </div>
      }
    </div>
  );
};

export default RestaurantCategory;
