// eslint-disable-next-line no-unused-vars
// import Post from '../components/Post'
import Nav from '../components/Nav'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayPosts from '../components/DisplayPosts';
import FakeComponent from '../components/FakeComponent';
import PostForm from '../components/Post Components/PostForm';
import usePosts from '../hooks/usePosts'; // Add the import statement for usePosts


function DashBoard({users}) {

  const { posts, selectedPost ,setSelectedPost, editMode ,setEditMode, editModeOn, deleteItem, handleFormSubmit } = usePosts(); // Use the custom hook usePosts

  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <>

      <Nav />
      <FakeComponent onClickProp={() => { setShowPopUp(!showPopUp); setEditMode(false); setSelectedPost({}); }} />
      {posts && <DisplayPosts items={posts} onDeleteProp={(item) => deleteItem(item)} showPopUp={() => setShowPopUp(!showPopUp)} onEdit={(item) => editModeOn(item)} />}
      {showPopUp && <PostForm onClickProp={() => { /*setShowPopUp(!showPopUp);*/ if (!showPopUp) { setEditMode(false) } }} onSubmitProp={handleFormSubmit} users={users} item={selectedPost} editMode={editMode} />}

    </>
  )
}

export default DashBoard;
