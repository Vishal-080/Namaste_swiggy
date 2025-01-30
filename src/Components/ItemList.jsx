import React from "react";

const ItemList = ({ items }) => {
  console.log(items, "items");
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id}>
          <div>{item?.card?.info?.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
