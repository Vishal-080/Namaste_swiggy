import React from "react";

const ItemList = ({ items }) => {
  // console.log(items, "items");

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
          <div>
            <p>{item?.card?.info?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
