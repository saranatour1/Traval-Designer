

// eslint-disable-next-line no-unused-vars
import React from "react";
import Nav from "../components/Nav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";






function MainPage() {
  const navigate =  useNavigate();
  const userToken =localStorage.getItem('token');
  // if there's no user token , go back to the sign in page 
  useEffect(() => {
    if(!userToken){
      navigate('/signin');
    }
  }, [])
  

  return (
    <div >
      <Nav/>
      <SearchBar />

    </div>
  )
}

export default MainPage;