import { useState ,useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';


import Post from '../components/Post Components/Post';
import React from 'react';

function Test() {

  const [trip, setTrip] = useState({});
  const id = useParams();
  
  
  
  useEffect(() => {
    fetch(`http://localhost:8000/api/trips/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTrip(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  



  return (
    <>
    <h1>hi</h1>

<Post item={trip}/>
    </>


  
    
  );
}

export default Test;
