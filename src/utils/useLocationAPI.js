import { LOCATION_API } from "./constants";

const useLocationAPI = async (searchQuery, setLocationData) => {
  try {
    const data = await fetch(LOCATION_API + searchQuery);
    const json = await data.json();

    setLocationData(json?.data);
  } catch (err) {
    console.log(err);
  }
};

export default useLocationAPI;
