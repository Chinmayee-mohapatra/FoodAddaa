import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log("res Data: ", resData);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div
      data-testid="resData"
      className="m-4 p-4 w-[230px] rounded-md bg-gray-50 hover:bg-gray-100 hover:scale-95 transition-all duration-200"
    >
      <img
        className="rounded-md aspect-square"
        src={CDN_URL + cloudinaryImageId}
        alt="Meghna food"
      />
      <h3 className="text-bold py-4 text-lg">
        {name.length > 20 ? `${name.substring(0, 20)}...` : name}
      </h3>
      <p className="mb-4">
        {cuisines.length > 2
          ? `${cuisines.join(", ").substring(0, 40)}...`
          : cuisines.join(", ")}
      </p>
      <div className="flex justify-between ">
        <p className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            className="bi bi-star-fill bg-green-600 p-1 rounded-full"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          {avgRating}
        </p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

// Higher order function

// input - ResataurantCard => output = RestaurantCard with Offer (if any)

export const withOfferLabel = (RestaurantCard) => {
  return (props) => {
    const { header, subHeader } = props.resData.info.aggregatedDiscountInfoV3;
    // console.log(props);
    return (
      <div>
        <label className="w-max absolute flex gap-2 bg-slate-800 text-white text-bold m-2 py-1 px-4 shadow-lg rounded-md z-10">
          <p>{header}</p>
          <p>{subHeader}</p>
        </label>

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
