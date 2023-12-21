import React, { useContext } from "react";
import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_RES_LIST_API } from "../utils/constants";
import BodyOffersCards from "./mainSections/BodyOffersCards";
import WhatsOnYourMind from "./mainSections/WhatsOnYourMind";
import InfiniteRestaurantList from "./mainSections/InfiniteRestaurantList";
import { useSelector } from "react-redux";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [whatsOnYourMindData, setWhatsOnYourMind] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardOffer = withOfferLabel(RestaurantCard);

  const { lat, lng } = useSelector((store) => store.location.userLocation);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      SWIGGY_RES_LIST_API +
        "lat=" +
        lat +
        "&lng=" +
        lng +
        "&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "x-cors-api-key": "temp_b1ee55ec52573bc9081fb1a8df5cd212",
        },
      }
    );

    const json = await data.json();
    console.log("Restaurants list data in Body Component: ", json?.data);

    setWhatsOnYourMind(json?.data?.cards[1]);

    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      // Enhance the offline message to be some sort of a game or something for better user experience
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex justify-between">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box border-solid border-2 border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            name="Search"
            className="px-4 py-1 bg-green-700 m-2 text-white rounded-sm"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-sm hover:bg-gray-300"
            onClick={() => {
              // Filter logic here
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Offers on body page */}
      <div className="">
        <BodyOffersCards />
        <WhatsOnYourMind whatsOnYourMindData={whatsOnYourMindData} />
      </div>

      <div>
        <p className="font-semibold text-2xl mx-10 my-2">
          Top restaurant chains
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/browse/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardOffer resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
      <div>
        <InfiniteRestaurantList />
      </div>
    </div>
  );
};

export default Body;
