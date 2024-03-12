import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SWIGGY_RES_LIST_API } from "../../utils/constants";
import RestaurantCard, { withOfferLabel } from "../RestaurantCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const InfiniteRestaurantList = () => {
  const [restaurants, setLocalData] = useState([]);
  const [data, setData] = useState([]);

  const RestaurantCardOffer = withOfferLabel(RestaurantCard);

  const { lat, lng } = useSelector((store) => store.location.userLocation);

  useEffect(() => {
    fetchData();
    updateDataFromLocalData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      SWIGGY_RES_LIST_API +
        "lat=" +
        lat +
        "&lng=" +
        lng +
        "&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "x-cors-api-key": "temp_376ff21bd9ebc092716968dedbb95ad5",
        },
      }
    );
    const json = await response.json();
    setLocalData([
      ...json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    ]);
  };

  const updateDataFromLocalData = () => {
    setData([...data, restaurants.slice(6, data.length)]);
  };

  return (
    restaurants.length > 0 && (
      <div className="mx-4">
        <div className="mx-6 mb-2 font-semibold text-2xl">More restaurants</div>
        <InfiniteScroll
          hasMore={true}
          dataLength={data.length}
          next={updateDataFromLocalData}
          endMessage={<p>No more restaurant</p>}
        >
          <div className="flex flex-wrap ">
            {restaurants &&
              restaurants?.map((restaurant) => (
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
        </InfiniteScroll>
      </div>
    )
  );
};

export default InfiniteRestaurantList;
