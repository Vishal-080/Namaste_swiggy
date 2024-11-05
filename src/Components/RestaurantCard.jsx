import RES_URL from "../utils/constants";

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={RES_URL}
      />
      <h2 className="res-name">{props.resName}</h2>
      <h4>{props.resRatings}</h4>
      <h4>{props.price}</h4>
      <button className="order-btn">Order Now</button>
    </div>
  );
};

export default RestaurantCard;