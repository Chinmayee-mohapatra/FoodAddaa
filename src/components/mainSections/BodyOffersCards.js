import React from "react";
import { useState, useEffect } from "react";
import { BODY_OFFER_BANNER, SWIGGY_RES_LIST_API } from "../../utils/constants";
import { Oval } from "react-loader-spinner";
import { useSelector } from "react-redux";

const BodyOffersCards = () => {
  const [offerDetails, setOfferDetails] = useState([]);
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
        "&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setOfferDetails(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    console.log("OFFER DETAILS: ", offerDetails);
  };

  return offerDetails?.length === 0 ? (
    <div className="w-full h-[300px] bg-[#0C2A4C] text-xl text-white flex flex-col gap-4 justify-center items-center">
      <Oval
        height={80}
        width={80}
        color="#ffffff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#d3d3d3"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      <p>Looking for great offers near you...</p>
    </div>
  ) : (
    <div className="overflow-auto no-scrollbar flex flex-col gap-2">
      <div className="mx-10 text-2xl font-semibold">Best offers for you</div>
      <div className="flex flex-row gap-8 mx-10 my-2">
        {offerDetails?.map((offer) => (
          <div key={offer?.id} className=" ">
            <img
              src={BODY_OFFER_BANNER + offer?.imageId}
              className="w-full h-auto"
              style={{ minWidth: "400px", minHeight: "100%" }}
              alt={`Offer ${offer?.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyOffersCards;
