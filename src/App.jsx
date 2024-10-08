import "./App.css";
import Header from './Components/Header';

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv"
      />
      <h2>{props.resName}</h2>
      <h4>{props.resRatings}</h4>
      <h4>{props.price}</h4>
      <button className="order-btn">Order Now</button>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          cl
          type="text"
          name="search"
          placeholder="Search Restaurants, Cusines, Dishes here..."
        />
      </div>
      <div className="res-container">
        <RestaurantCard
          resName={"Meghna Foods"}
          resRatings={"4.2 stars"}
          price={"200 Rs for two"}
        />
        <RestaurantCard
          resName={"Vegily Foods"}
          resRatings={"4.2 stars"}
          price={"300 Rs for two"}
        />
        <RestaurantCard
          resName={"Momosa"}
          resRatings={"4.8 stars"}
          price={"250 Rs for two"}
        />
        <RestaurantCard
          resName={"Meghna Kitchen"}
          resRatings={"4.9 stars"}
          price={"100 Rs for two"}
        />
        <RestaurantCard
          resName={"Meghna Foods"}
          resRatings={"4.2 stars"}
          price={"200 Rs for two"}
        />
        <RestaurantCard
          resName={"KFC"}
          resRatings={"2.2 stars"}
          price={"400 Rs for two"}
        />
        <RestaurantCard
          resName={"Meghna Foods"}
          resRatings={"4.2 stars"}
          price={"200 Rs for two"}
        />
        <RestaurantCard
          resName={"Meghna Foods"}
          resRatings={"4.2 stars"}
          price={"200 Rs for two"}
        />
        <RestaurantCard
          resName={"Meghna Foods"}
          resRatings={"4.2 stars"}
          price={"200 Rs for two"}
        />
        <RestaurantCard
          resName={"Indian Coffee House"}
          resRatings={"5 stars"}
          price={"200Rs for two"}
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

export default AppLayout;