

// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SignedOutNav from "../components/SignedOutNav";
import { useState } from "react";
import Display from "../components/Display";
import Toast from "../components/Validation Toast/Toast";


function MainPage() {
  const [coordinates, setCoordinates] = useState({});
  const [nearby, setNearby] = useState({}); 
  const [results , setResults] =useState({});
  const [error, setError] =useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const newCoordinates = { lat: position.coords.latitude, long: position.coords.longitude };
      setCoordinates(newCoordinates);
    });
  }, []);
  
  console.log(error);
  useEffect(() => {
    console.log('i am here', coordinates);
    localStorage.setItem('coord', JSON.stringify(coordinates));
  }, [coordinates]);

  useEffect(() => {
    const fetchData = async () => {
      const oldVal = localStorage.getItem('coord');
  
      try {
        const parsedVal = JSON.parse(oldVal);
        
        if (parsedVal && parsedVal.lat === coordinates.lat && parsedVal.long === coordinates.long) {
          // Do nothing
          // setNearby(parsedVal)
          // getNearbyValue(coordinates.lat, coordinates.long);
          setNearby(JSON.parse(localStorage.getItem('nearby')));
        } else {
          // Do the API call once
          await getNearbyValue(coordinates.lat, coordinates.long);
          localStorage.setItem('coord', JSON.stringify(coordinates));
        }
      } catch (error) {
        // Handle parsing error
        console.error('Error parsing JSON:', error);
      }
    };
  
    fetchData();
  }, [coordinates]);


  
  // This does not work for the city of Tulkarem! 
  const getNearbyValue = (lat, long) => {
    console.log(lat,long)
    fetch(`http://localhost:8000/api/nearby/${lat},${long}/findnearby`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('nearby' , JSON.stringify(data.json));
        setNearby(data.json);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const getPicsUpdate =(locationId) =>{
    fetch(`http://localhost:8000/api/places/${locationId}/findlocationmage`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        // localStorage.setItem('images' , JSON.stringify(data.json));
        getLargeImageUrls(data.data); 
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

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
  



  console.log(results)
  return (
    <div >
      {error ? error.map((item, idx) => <Toast key={idx} error={item} />) : ''}
    
      <SignedOutNav />
      <SearchBar onSubmitResult={(data)=> setResults(data)} getErrors={(items) => setError(items)}/>
      {results && <Display places={results.data} />}
      {nearby && <Display places={nearby.data} />}

      

    </div>
  )
}

export default MainPage;