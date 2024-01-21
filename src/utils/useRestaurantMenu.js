import React, { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resID, {
      headers: {
        "x-cors-api-key": "temp_ce6e5c1494da7e230091a6a9716c39bd",
      },
    });
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
