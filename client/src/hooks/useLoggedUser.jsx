
import { useEffect, useState } from 'react';

function useLoggedUser() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    // 

    fetch(`http://localhost:8000/api/user/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {return response.json()})
      .then(data => {
        setLoggedInUser(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return {loggedInUser}}


export default useLoggedUser;