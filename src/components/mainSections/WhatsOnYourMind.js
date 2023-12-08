import React from "react";
import { ITEMS_ICON } from "../../utils/constants";

const WhatsOnYourMind = ({ whatsOnYourMindData }) => {
  const data = whatsOnYourMindData?.card?.card?.header?.title;
  const items =
    whatsOnYourMindData?.card?.card?.gridElements?.infoWithStyle?.info;

  return (
    <div className="text-2xl mx-10 my-4 font-semibold">
      <p>{data}</p>
      <div className="flex gap-2 overflow-auto no-scrollbar">
        {items?.map((item) => (
          <div key={item?.id} className=" w-full cursor-pointer">
            <img
              src={ITEMS_ICON + item.imageId}
              style={{ minWidth: "130px", minHeight: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsOnYourMind;
