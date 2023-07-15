/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";


/**
 * The `usePost` function is a custom React hook that manages the state of likes, comments, likers, and
 * authorship for a post, and provides a function to add or delete likes for the post.
 * @returns an object with the following properties: `likes`, `comments`, `likers`, `isAuthor`, and
 * `addOrDelete`.
 */
function usePost({item}) {
  const [likes, setLikes] = useState(item?.likes?.like || 0);
  const [comments, setComments] = useState(item?.comments);
  const [likers, setLikers] = useState(
    item.likes?.likedBy?.map((item, idx) => item._id) || null
  );
  const [isAuthor, setIsAuthor] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    // console.log(userId);
    setUser(userId);
    item.author._id === userId ? setIsAuthor(true) : setIsAuthor(false);
  }, [item.author._id]);

  const addOrDelete = (postId) => {
    // const userId = localStorage.getItem('userId');

    fetch(`http://localhost:8000/api/addlike/${postId}/${user}/add`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (likers.includes(user)) {
          setLikes(likes - 1);
          setLikers(likers.filter((likerId) => likerId !== user));
        } else {
          setLikes(likes + 1);
          setLikers([...likers, user]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {likes , comments , likers, isAuthor ,addOrDelete}
}

export default usePost;