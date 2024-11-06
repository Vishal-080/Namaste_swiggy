import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          name="search"
          placeholder="Search Restaurants, Cusines, Dishes here..."
        />
      </div>
      <div className="filter">
        <button className="filter-btn">Top Rated Restaurants</button>
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

export default Body;
