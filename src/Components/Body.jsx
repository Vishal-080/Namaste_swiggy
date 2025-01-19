import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    // console.log("component render");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9352403&lng=77.624532&carousel=true&third_party_vendor=1"
      // "https://www.swiggy.com/mapi/restaurants/list/v5?&lat=12.9352403&lng=77.624532&"
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
    setFilteredRestaurant(filterRes);
  };

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const filterSearchRes = listOfRestaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filterSearchRes);
    setSearchText("");
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col justify-center items-center m-0">
      <div className="search">
        <input
          type="text"
          name="search"
          className="p-2.5 m-5 bg-[#f0f8ff] text-black rounded-tl-lg rounded-br-lg"
          value={searchText}
          onChange={handleSearchText}
          placeholder="Search Restaurants, Cusines, Dishes here..."
        />
        <button
          className="p-2.5 m-5 bg-[#f0f8ff] text-black rounded-tl-lg rounded-br-lg"
          onClick={handleSearch}
        >
          🔍Search
        </button>
      </div>
      <div className="filter">
        <button className="p-2.5 w-60 bg-black text-lime-300 cursor-pointer rounded-lg" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
