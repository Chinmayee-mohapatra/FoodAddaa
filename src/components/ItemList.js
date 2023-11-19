import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
// import { MENU_CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const MENU_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action when add button is clicked.
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          className="flex justify-between items-center p-2 m-2 border-gray-200 border-b-2"
        >
          <div key={item.card.info.id} className="w-8/12 text-left font-sans">
            <div className="flex flex-col py-2">
              <span>
                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                  <img
                    className="w-6"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
                    alt="veg"
                  />
                ) : (
                  <img
                    className="w-6"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/640px-Non_veg_symbol.svg.png"
                    alt="non-veg"
                  />
                )}{" "}
              </span>
              <span className="font-semibold">{item.card.info.name}</span>
              <span className="font-mono">
                ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-2/12 p-2">
            <div className="absolute">
              <button
                className="px-2 py-1 mx-6 rounded-sm bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              className="rounded-md"
              src={MENU_CDN_URL + item?.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
