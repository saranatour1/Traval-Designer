/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
function NotificationTab() {

  const [user ,setUser] =useState('');
  const navigate = useNavigate();  

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    setUser(userId);
 
  }, []);

  
  const handleLogout = () => {
    fetch('http://localhost:8000/api/logout', {
      method: 'GET',
    })
      .then(response => {

        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        return response.json();
      })
      .then(data => {

        navigate('/');

      })
      .catch(error => {
        console.error(error);
      });
    
  };



  return (
    <div
    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 transform scale-95 sm:scale-100"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu-button"
    // @ts-ignore
    tabIndex="-1"
  >
    <Link
      to={`/user/${user}`}
      className="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      // @ts-ignore
      tabIndex="-1"
      id="user-menu-item-0"
    >
      Your Profile
    </Link>
    <Link
      to={`/editprofile/${user}`}
      className="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      // @ts-ignore
      tabIndex="-1"
      id="user-menu-item-1"
    >
      Settings
    </Link>
    <Link
      className="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      // @ts-ignore
      tabIndex="-1"
      id="user-menu-item-2"
      onClick={handleLogout}
    >
      Sign out
    </Link>
  </div>
  )
}

export default NotificationTab;