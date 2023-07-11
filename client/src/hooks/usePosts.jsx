import { useEffect, useState } from "react";


function usePosts() {
  const [posts, setPosts] = useState([]); 
  
  const[editMode , setEditMode] = useState(false); // always false
  const[selectedPost , setSelectedPost] =useState({});

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

  return {posts,selectedPost ,setSelectedPost,editMode,setEditMode,editModeOn,deleteItem,handleFormSubmit}
}

export default usePosts;