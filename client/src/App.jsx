/* eslint-disable no-unused-vars */
// import  { useState } from 'react';
import {Routes , Route} from 'react-router-dom';
import RegestrationPage from "./layouts/RegestrationPage";
import SignInPage from "./layouts/SignInPage";
import Test from "./layouts/Test";
import MainPage from "./layouts/MainPage";
import DashBoard from './layouts/DashBoard';
import React from 'react';
import { useEffect } from 'react';
import SinglePostDetails from './layouts/SinglePostDetails';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfile from './layouts/UserProfile';

const App = () => {
  const [users , setUsers] =useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if(userId ==='' || userId ===null ){
      navigate('/');
    }
  }, []);

// person/{id} shows person 

      useEffect(() => {
        getUsers();
      }, []);

const getUsers = () => {
    fetch(`http://localhost:8000/api/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
    <Routes>
      <Route path ='/' element={<MainPage />} />
      <Route path='/signup' element={<RegestrationPage />}/>
      <Route path='/signin' element={<SignInPage />}/>
      <Route path='/dashboard' element={<DashBoard users={users} />} />
      <Route path='/post/:postId' element={<SinglePostDetails users={users} />}/>
      <Route path='/user/:userId' element={<UserProfile />} />
      <Route path ='/test' element={<Test />} />
    </Routes>


    </>
  );
};

export default App;
