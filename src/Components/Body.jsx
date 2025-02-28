import { useEffect, useState } from "react";
import RestaurantCard, { isOpen } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // isOpen is a Higher Order Component
  const RestaurantCardIsOpen = isOpen(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?lat=12.9352403&lng=77.624532"
      // "https://www.swiggy.com/mapi/restaurants/list/v5?&lat=12.9352403&lng=77.624532&"
    );

    const jsonData = await data.json();

    // console.log(data," api data");

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
    <div className="flex flex-col justify-center items-center m-0 cursor-default">
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
        <button
          className="p-2.5 w-60 bg-black text-lime-300 cursor-pointer rounded-lg"
          onClick={handleFilter}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex justify-center items-center flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardIsOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Crafted with ❤ and JavaScript by Vishal Rathod
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Body;
