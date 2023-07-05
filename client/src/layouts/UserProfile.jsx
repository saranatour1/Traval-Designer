import UserCard from '../components/Profile Component/UserCard';
import Nav from '../components/Nav';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import FullWidthTabs from '../components/Profile Component/FullWidthTabs';


// # add prop type validation
function UserProfile({users}) {
  const { userId } = useParams();
  const [loggedUser, setLoggedUser] = useState({}); // refactor this tommorow
  const [otherUser, setOtherUser] = useState({}); 

  const [posts , setPosts] =useState([]);

  const [collabPosts , setCollabPosts] = useState([]);



  useEffect(() => {
    findOtherUser();
  }, [userId]);

  useEffect(() => {
    findPostsWhereUserIsAuthor();
  }, []);

  useEffect(() => {
    findPostsWhereUserIsCollab()
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setLoggedUser(userId);
  }, []);



  const findPostsWhereUserIsAuthor = () => {
    fetch(`http://localhost:8000/api/trips/user/${userId}`, {
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

        // console.log(data);
        setPosts(data);
      })
      .catch(error => {
        console.error(error);
      });
  }


  
  const findPostsWhereUserIsCollab = () => {
    fetch(`http://localhost:8000/api/trips/user/collab/${userId}`, {
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

        // console.log(data);
        setCollabPosts(data);
      })
      .catch(error => {
        console.error(error);
      });
  }


  const findOtherUser = () => {
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
        // console.log(data);
        setOtherUser(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <Nav />
      <div>
        UserProfile
        {/* Render user information from loggedUser state */}
          <p>{otherUser.firstName}</p>
          <UserCard user={loggedUser} otherUser={otherUser} collab={collabPosts.length} normalPosts ={posts.length} />
          <FullWidthTabs items={posts} users={users} collab={collabPosts}  />

      </div>
    </>
  );
}

export default UserProfile;
