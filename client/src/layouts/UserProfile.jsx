import UserCard from '../components/Profile Component/UserCard';
import Nav from '../components/Nav';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DisplayPosts from '../components/DisplayPosts';

function UserProfile() {
  const { userId } = useParams();
  const [loggedUser, setLoggedUser] = useState({}); // refactor this tommorow
  const [posts , setPosts] =useState([]);
  const [showPopUp , setShowPopUp]= useState(false);

  const[editMode , setEditMode] = useState(false); // always false
  const[selectedPost , setSelectedPost] =useState({});


  const navigate = useNavigate();

  useEffect(() => {
    findLoggedInUser();
  }, [userId]);

  useEffect(() => {
    findPostsWhereUserIsAuthor();
  }, []);

  const findPostsWhereUserIsAuthor = () => {
    fetch(`http://localhost:8000/trips/user/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
      .then(response => {
        if(response.status === 404){
          setPosts([]);
        }
        return response.json();
      })
      .then(data => {

        console.log(data);
        setPosts(data);
      })
      .catch(error => {
        console.error(error);
      });
  }




  const findLoggedInUser = () => {
    fetch(`http://localhost:8000/api/user/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    setLoggedUser(data);
  })
  .catch(error => {
    console.error(error);
  });
  };

  const deleteItem =(Item) =>{
    setPosts(posts.filter((post)=> post._id != Item));
  } 

  const editModeOn = (item) =>{
    setEditMode(true);
    setSelectedPost(item);
  }
  

  return (
    <>
      <Nav />
      <div>
        UserProfile
        {/* Render user information from loggedUser state */}
        <p>{loggedUser.firstName}</p>

        <UserCard user={loggedUser} />
        <div className='mx-auto '>
        {posts && <DisplayPosts items={posts} onDeleteProp={(item)=> deleteItem(item)} showPopUp={() => setShowPopUp(!showPopUp)}  onEdit={(item)=> editModeOn(item)}/>}

        </div>

      </div>
    </>
  );
}

export default UserProfile;
