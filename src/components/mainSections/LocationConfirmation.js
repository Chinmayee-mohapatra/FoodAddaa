import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocationAPI } from "../../utils/useLocationAPI";
import { CiLocationOn } from "react-icons/ci";
import { ADDRESS_API } from "../../utils/constants";
import { getLocation } from "../../utils/locationSlice";

const LocationConfirmation = () => {
  const searchText = useRef(null);
  const [searchData, setSearchData] = useState([]);
  const dispatch = useDispatch();

  const handleSearch = (searchQuery) => {
    useLocationAPI(searchQuery, setSearchData);
  };

  const fetchAddress = async (place_id) => {
    try {
      const address = await fetch(ADDRESS_API + place_id);
      if (!address.ok) {
        const error = address.status;
        throw new Error(error);
      } else {
        const { data } = await address.json();
        // console.log("ADDRESS: ", data);

        dispatch(
          getLocation({
            city: data[0]?.address_components[0]?.short_name,
            lat: data[0]?.geometry?.location?.lat,
            lng: data[0]?.geometry?.location?.lng,
            address: data[0]?.formatted_address,
          })
        );
        window.location.reload();
      }
    } catch (err) {
      console.log("Error while fetching location data.", err);
    }
  };

  return (
    <div className=" top-0 left-36">
      <div className="w-full">
        <input
          type="text"
          placeholder="Enter Location"
          ref={searchText}
          onChange={() => handleSearch(searchText.current?.value)}
          className="border-2 border-orange-700 p-2 text-lg"
        />
        <ul className="bg-slate-100 rounded-md fixed mx-auto w-1/2 md:w-1/3">
          {searchData &&
            searchData?.map((item) => (
              <li
                key={item?.place_id}
                onClick={() => fetchAddress(item?.place_id)}
                className="cursor-pointer hover:bg-slate-300 py-4 px-3 text-base flex items-center gap-2  "
              >
                <p className="text-xl">
                  <CiLocationOn />
                </p>
                <p>{item?.description}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationConfirmation;
