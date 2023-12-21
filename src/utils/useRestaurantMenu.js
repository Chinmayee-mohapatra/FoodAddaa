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
        "x-cors-api-key": "temp_b1ee55ec52573bc9081fb1a8df5cd212",
      },
    });
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
