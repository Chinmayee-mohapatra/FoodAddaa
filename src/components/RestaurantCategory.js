import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, veg, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Accordian Header */}
      <div className="w-full mx-auto my-2 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          {showItems ? (
            <span>
              <IoIosArrowDown />
            </span>
          ) : (
            <span>
              <IoIosArrowUp />
            </span>
          )}
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList veg={veg} items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
