import React from "react";

const ItemList = ({items}) => {
  // console.log(items," item list")
  return <div>{items?.card?.info?.name}</div>;
};

export default ItemList;
