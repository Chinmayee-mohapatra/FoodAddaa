import { LOCATION_API } from "./constants";

export const useLocationAPI = async (searchQuery, setSearchData) => {
  try {
    const data = await fetch(LOCATION_API + searchQuery);
    const json = await data.json();

    setSearchData(json?.data);
    // console.log(lat, lng);
  } catch (err) {
    console.log(err);
  }
};
