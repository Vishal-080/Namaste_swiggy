const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv"
      />
      <h2 className="res-name">{props.resName}</h2>
      <h4>{props.resRatings}</h4>
      <h4>{props.price}</h4>
      <button className="order-btn">Order Now</button>
    </div>
  );
};

export default RestaurantCard;