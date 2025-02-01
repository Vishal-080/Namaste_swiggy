import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  // console.log(data,"data   d");

  const HandleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      {data?.itemCards?.length ? (
        <div className="m-4 p-4 cursor-pointer">
          <div className="m-2 p-1 text-left flex justify-between items-center">
            <div className="font-semibold text-lg">
              {data?.title} ({data?.itemCards?.length})
            </div>
            <span>🔽</span>
          </div>
          {data?.itemCards?.length ? <ItemList items={data?.itemCards} /> : ""}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RestaurantCategory;
