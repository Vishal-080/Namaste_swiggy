import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  // console.log(data,"data   d");

  const [showItemList, setShowItemList] = useState(false);

  const handleClick = () => {
    setShowItemList(!showItemList);
  };

  return (
    <div>
      {data?.itemCards?.length ? (
        <div className="m-4 p-4 ">
          <div className="m-2 p-1 text-left flex justify-between items-center cursor-pointer" onClick={handleClick}>
            <div className="font-semibold text-lg">
              {data?.title} ({data?.itemCards?.length})
            </div>
            <span>🔽</span>
          </div>
          {data?.itemCards?.length && showItemList ? <ItemList items={data?.itemCards} /> : ""}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RestaurantCategory;