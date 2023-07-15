
import { useEffect, useState } from 'react';

/**
 * The `useLoggedUser` function is a custom React hook that retrieves the logged-in user data from the
 * server and returns it.
 * @returns an object that contains the `loggedInUser` state variable.
 */
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