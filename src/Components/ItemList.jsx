import React, { useState } from "react";
import { RES_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const handleAddItem = (item) => {
    dispatch(addItems(item));
    setShowToast(true);
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className="border-b-4 m-4 p-2 flex justify-between items-center bg-[#353535] rounded-xl shadow-lg"
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
              className="rounded-lg bg-white text-black px-3 relative cursor-pointer text-lg font-medium my-1"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
      {showToast ? (
        <div className="toast">
          <div className="alert alert-info">
            <span>Item added to Cart...!</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ItemList;
