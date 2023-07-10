import { useState, useEffect } from "react";

/**
 * The `useNearby` function is a custom React hook that fetches nearby data based on latitude and
 * longitude coordinates and stores it in local storage.
 * @returns The `nearby` variable is being returned.
 */
function useNearby() {
  const [nearby, setNearby] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const oldVal = await localStorage.getItem("coord");
      const parsedVal = await JSON.parse(oldVal);
      const { lat, long } = parsedVal;
      getNearbyValue(lat, long);

      localStorage.setItem("coord", JSON.stringify(parsedVal));
    };

    fetchData();
  }, []);

  const getNearbyValue = (lat, long) => {
    fetch(`http://localhost:8000/api/nearby/${lat},${long}/findnearby`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("nearby", JSON.stringify(data));
        setNearby(data.json);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return nearby;
}

export default useNearby;
