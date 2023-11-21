import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import OfferCard from "./OfferCard";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);

  const [showIndex, setShowIndex] = useState(0);
  const [veg, setVeg] = useState(false);

  if (resInfo === null) return <Shimmer />;

  const { offers } = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

  const {
    name,
    areaName,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    feeDetails,
  } = resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleCheckbox = (e) => {
    setVeg(e.target.checked);
  };

  return (
    <div className="w-96 md:w-[32rem] lg:w-[50rem] mx-auto">
      <div className="flex justify-between">
        {/* left */}
        <div className="">
          <h1 className="text-xl text-bold tracking-wider">{name}</h1>
          <p className="text-sm text-slate-600">{cuisines.join(", ")}</p>
          <p className="text-sm text-slate-600">{areaName}</p>
          <p className="text-sm text-slate-600 pt-4">{feeDetails.message}</p>
        </div>

        {/* right */}
        <div className="flex flex-col justify-around border-[1px] rounded-lg px-2 py-1">
          <h3 className="flex justify-center items-center gap-1 text-green-700 text-bold text-md pb-4 border-b-[1px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="green"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            {avgRating}
          </h3>
          <p className=" font-medium text-sm text-slate-500 tracking-tighter">
            {totalRatingsString}
          </p>
        </div>
      </div>

      <div className="w-full mt-4 border-t-2 border-dashed py-4">
        <h3 className="font-bold mb-3">{costForTwoMessage}</h3>

        <div className="flex gap-3 overflow-hidden my-6">
          {offers.map((offer) => (
            <OfferCard key={offer.info.offerIds[0]} data={offer} />
          ))}
        </div>
      </div>

      <div className="flex flex-row gap-2">
        <label className="font-medium text-lg">Veg only</label>
        <input
          type="checkbox"
          className="w-6 accent-green-900 focus:accent-green-600"
          onChange={(e) => handleCheckbox(e)}
        />
      </div>

      {/* Categories Accordian */}
      {categories?.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          veg={veg}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
