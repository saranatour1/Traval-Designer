import { useState, useEffect } from "react";

/**
 * The useCoordinates function is a custom React hook that retrieves the user's current coordinates
 * using the geolocation API and returns them as an object.
 * @returns The `useCoordinates` function returns the `coordinates` object.
 */
function useCoordinates() {
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const newCoordinates = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };
      setCoordinates(newCoordinates);
    });
  }, []);

  return coordinates;
}

export default useCoordinates;
