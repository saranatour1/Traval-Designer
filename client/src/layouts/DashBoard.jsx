// eslint-disable-next-line no-unused-vars
// import Post from '../components/Post'
import Nav from '../components/Nav'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayPosts from '../components/DisplayPosts';
import FakeComponent from '../components/FakeComponent';
import PostForm from '../components/Post Components/PostForm';

function DashBoard({users}) {
  const [posts, setPosts] = useState([]); 
  const [showPopUp , setShowPopUp]= useState(false);

  const[editMode , setEditMode] = useState(false); // always false
  const[selectedPost , setSelectedPost] =useState({});

  useEffect(() => {
        getPosts();
  }, []);

//   useEffect(() => {
//     getUsers();
// }, []);


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
        // console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleFormSubmit = (item) => {
    if(editMode){
      setPosts(prevPosts => {
        const updatedPosts = prevPosts.map(post => {
          if (post._id === item._id) {
            return {
              ...post,
              ...item,
            };
          }
          return post;
        });
        setEditMode(false);
        setSelectedPost({});
        return updatedPosts;
      });
    }else{
      setPosts([item , ...posts]);
    }


  };
  
  const deleteItem =(Item) =>{
    setPosts(posts.filter((post)=> post._id != Item));
  } 
  
  const editModeOn = (item) =>{
    setEditMode(true);
    setSelectedPost(item);
  }





  // console.log(selectedPost);
  // console.log(editMode)

  return (
    <>
      <Nav />
      <FakeComponent onClickProp ={() => {setShowPopUp(!showPopUp); setEditMode(false); setSelectedPost({});} } />
      {posts && <DisplayPosts items={posts} onDeleteProp={(item)=> deleteItem(item)} showPopUp={() => setShowPopUp(!showPopUp)}  onEdit={(item)=> editModeOn(item)}/>}
      {showPopUp && <PostForm onClickProp={() => {setShowPopUp(!showPopUp); if(!showPopUp){setEditMode(false)}}} onSubmitProp={handleFormSubmit} users={users}  item={selectedPost} editMode={editMode}/>}

    </>
  )
}

export default DashBoard;