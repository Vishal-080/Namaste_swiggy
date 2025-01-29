import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  // console.log(data,"data   d");
  return (
    <div>
      <div className="border-b-2 m-4 p-2 flex justify-between items-center cursor-pointer">
        {data.title} ({data?.itemCards?.length})<span>🔽</span>
      </div>
      <ItemList items={data?.itemCards}/>
    </div>
  );
};

export default RestaurantCategory;
