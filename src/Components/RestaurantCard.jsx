import RES_URL from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="flex w-60 h-96 border border-black border-solid p-2 m-5 flex-col justify-center items-center text-center bg-[#faebd7] ">
      <img
        className="res-img"
        src={RES_URL + resData?.info?.cloudinaryImageId}
      />
      <h2 className="res-name">{resData?.info?.name}</h2>
      <h4>{resData?.info?.avgRating}</h4>
      <h4>{resData?.info?.costForTwo}</h4>
      <button className="order-btn">Order Now</button>
    </div>
  );
};

export default RestaurantCard;
