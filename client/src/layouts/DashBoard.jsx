// eslint-disable-next-line no-unused-vars
// import Post from '../components/Post'
import Nav from '../components/Nav'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayPosts from '../components/DisplayPosts';

function DashBoard() {
  const [posts, setPosts] = useState({})  

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
      
      {posts && <DisplayPosts items={posts}/>}

    </>
  )
}

export default DashBoard;