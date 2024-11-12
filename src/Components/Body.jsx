import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9352403&lng=77.624532&carousel=true&third_party_vendor=1"
    );

    const jsonData = await data.json();

    setListOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const handleFilter = () => {
    const filterRes = listOfRestaurants.filter(
      (res) => res?.info?.avgRating >= 4.3
    );
    console.log(filterRes, "filterRes");
    setFilteredRestaurant(filterRes);
    setFilteredList(!false);
  };

  const handleSearchText = (e) =>{
    setSearchText(e.target.value);
  }

  const handleSearch = () => {
    console.log("Search button clicked",searchText);
  }


  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          name="search"
          className="search-box"
          value={searchText}
          onChange={handleSearchText}
          placeholder="Search Restaurants, Cusines, Dishes here..."
        />
        <button className="search-btn" onClick={handleSearch}>🔍Search</button>
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList
          ? filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
            ))
          : listOfRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
            ))}
      </div>
    </div>
  );
};

export default Body;
