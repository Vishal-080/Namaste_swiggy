import RES_URL from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img className="res-img" src={RES_URL + resData?.info?.cloudinaryImageId} />
      <h2 className="res-name">{resData?.info?.name}</h2>
      <h4>{resData?.info?.avgRating}</h4>
      <h4>{resData?.info?.costForTwo}</h4>
      <button className="order-btn">Order Now</button>
    </div>
  );
};

export default RestaurantCard;
