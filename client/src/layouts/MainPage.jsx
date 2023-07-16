// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Display from "../components/Display";
import SearchBar from "../components/SearchBar";
import SignedOutNav from "../components/SignedOutNav";
import Toast from "../components/Validation Toast/Toast";
import useCoordinates from "../hooks/useCoordinates";
import useNearby from "../hooks/useNearby";



function MainPage() {
  // added the useCoordinates hook to extract user coordinate. 
  const coordinates = useCoordinates();
  // added useNearby to extract nearby data
  const nearby = useNearby();
  const [results, setResults] = useState({});
  const [error, setError] = useState([]);

  const [isResults, setISResults] = useState(false);

  useEffect(() => {
    if (Object.entries(results).length > 0) {
      setISResults(true);
    } else {
      setISResults(false);
    }
  }, [results]);


  useEffect(() => {
    localStorage.setItem("coord", JSON.stringify(coordinates));
  }, [coordinates]);



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
