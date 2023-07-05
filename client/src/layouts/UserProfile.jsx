import UserCard from '../components/Profile Component/UserCard';
import Nav from '../components/Nav';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import FullWidthTabs from '../components/Profile Component/FullWidthTabs';


function UserProfile() {
  const { userId } = useParams();
  const [loggedUser, setLoggedUser] = useState({}); // refactor this tommorow
  const [otherUser, setOtherUser] = useState({}); 

  const [posts , setPosts] =useState([]);



  const navigate = useNavigate();

  useEffect(() => {
    findOtherUser();
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
        console.log(data);
        setLoggedUser(data);
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
          <p>{loggedUser.firstName}</p>
          <UserCard user={loggedUser} otherUser={otherUser} />
          <FullWidthTabs items={posts} />

      </div>
    </>
  );
}

export default UserProfile;
