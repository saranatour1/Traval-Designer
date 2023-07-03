// eslint-disable-next-line no-unused-vars
// import Post from '../components/Post'
import Nav from '../components/Nav'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayPosts from '../components/DisplayPosts';
import FakeComponent from '../components/FakeComponent';
import PostForm from '../components/Post Components/PostForm';

function DashBoard() {
  const [posts, setPosts] = useState({}) 
  const [showPopUp , setShowPopUp]= useState(false); 

  useEffect(() => {
        getPosts();
  }, []);


  const getPosts = () => {

    fetch(`http://localhost:8000/api/trips`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };



  return (
    <>
      <Nav />
      

      <FakeComponent onClickProp ={() => setShowPopUp(!showPopUp)} />
      {posts && <DisplayPosts items={posts}/>}
      {showPopUp && <PostForm onClickProp ={() => setShowPopUp(!showPopUp)}  />}

    </>
  )
}

export default DashBoard;