import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  console.log("list of res", listOfRestaurants);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9352403&lng=77.624532&carousel=true&third_party_vendor=1"
    );
    const jsonData = await data.json();

    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();


    console.log("useEffect   ");
  }, []);

  const handleFilter = () => {};

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
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => 
          <RestaurantCard resData={restaurant} />
        )}
      </div>
    </div>
  );
};

export default Body;
