// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Display from "../components/Display";
import SearchBar from "../components/SearchBar";
import SignedOutNav from "../components/SignedOutNav";
import Toast from "../components/Validation Toast/Toast";

function MainPage() {
  const [coordinates, setCoordinates] = useState({});
  const [nearby, setNearby] = useState({});
  const [results, setResults] = useState({});
  const [error, setError] = useState([]);

  const [isResults, setISResults] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const newCoordinates = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };
      setCoordinates(newCoordinates);
    });
  }, []);

  useEffect(() => {
    if (Object.entries(results).length > 0) {
      setISResults(true);
    } else {
      setISResults(false);
    }
  }, [results]);

  // console.log(error);
  useEffect(() => {
    // console.log('i am here', coordinates);
    localStorage.setItem("coord", JSON.stringify(coordinates));
  }, [coordinates]);

  useEffect(() => {
    const fetchData = async () => {
      const oldVal = localStorage.getItem("coord");

      try {
        const parsedVal = JSON.parse(oldVal);

        if (
          localStorage.getItem("nearby") ===undefined && localStorage.getItem("coord")
        ) {
          // Do nothing
          // setNearby(parsedVal)
          getNearbyValue(coordinates.lat, coordinates.long);
          localStorage.setItem("coord", JSON.stringify(coordinates));
          
        } else if(localStorage.getItem("coord")) {
          getNearbyValue(coordinates.lat, coordinates.long);
          localStorage.setItem("coord", JSON.stringify(coordinates));
        }else{
          // Do the API call once
          setNearby(JSON.parse(localStorage.getItem("nearby")));

          // await getNearbyValue(coordinates.lat, coordinates.long);
          // localStorage.setItem("coord", JSON.stringify(coordinates));
        }
      } catch (error) {
        // Handle parsing error
        console.error("Error parsing JSON:", error);
      }
    };

    fetchData();
  }, [coordinates]);

  // This does not work for the city of Tulkarem!
  const getNearbyValue = (lat, long) => {
    // console.log(lat,long)
    fetch(`http://localhost:8000/api/nearby/${lat},${long}/findnearby`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("nearby", JSON.stringify(data.json));

        setNearby(data.json);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPicsUpdate = (locationId) => {
    fetch(`http://localhost:8000/api/places/${locationId}/findlocationmage`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // localStorage.setItem('images' , JSON.stringify(data.json));
        getLargeImageUrls(data.data);
        // console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function getLargeImageUrls(data) {
    const imageUrls = {};
    data.forEach((item) => {
      const { id, images } = item;
      const largeImageUrl = images.large.url;

      if (largeImageUrl) {
        if (imageUrls[id]) {
          imageUrls[id].push(largeImageUrl);
        } else {
          imageUrls[id] = [largeImageUrl];
        }
      }
    });

    return imageUrls;
  }

  // console.log(results)
  return (
    <div>
      {error ? error.map((item, idx) => <Toast key={idx} error={item} />) : ""}

      <SignedOutNav />
      <div className=" flex justify-center ">
        <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white my-5">
          Search Any Place{" "}
        </h3>
      </div>
      <SearchBar
        onSubmitResult={(data) => setResults(data)}
        getErrors={(items) => setError(items)}
      />
      {isResults && (
        <h3 className=" mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white my-5 text-center">
          Your search Results
        </h3>
      )}
      {isResults && <Display places={results.data} />}
      {nearby && (
        <h3 className=" mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white my-5 text-center">
          Nearby Places
        </h3>
      )}
      {nearby && <Display places={nearby.data} />}
    </div>
  );
}

export default MainPage;
