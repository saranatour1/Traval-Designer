import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post Components/Post';
import PostForm from '../components/Post Components/PostForm';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import CommentForm from '../components/Comments Component/CommentForm';
import CommentDisplay from '../components/Comments Component/CommentDisplay';

function SinglePostDetails({ users }) {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const [showPopUp, setShowPopUp] = useState(false);
  const [editMode, setEditMode] = useState(false); // always false
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setLoggedInUser(userId);
  }, []);

  useEffect(() => {
    const getPost = () => {
      fetch(`http://localhost:8000/api/trips/${postId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          setPost(data);
        })
        .catch(error => {
          console.error(error);
        });
    };

    getPost();
  }, [postId]);

  const deletePost = (item) => {
    console.log(item);
    navigate('/dashboard');
  };

  const editModee = (item) => {
    console.log(item);
    setEditMode(true);
    // setSelectedPost(item);
  };


  const handleFormSubmit = (item) => {
    fetch(`http://localhost:8000/api/trips/${item._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then(response => response.json())
      .then(data => {
        setPost(data);
        setEditMode(false);
        setShowPopUp(!showPopUp);
      })
      .catch(error => {
        console.error(error);
      });
  };


  const deleteComment =(comment)=>{
    setPost(comment);

  }


  return (
    <>
      <Nav />
      <div className="flex min-h-screen justify-center items-center">
        {post._id ? (
          <div>
            <Post
              item={post}
              onDeleteProp={item => deletePost(item)}
              showPopUp={() => setShowPopUp(!showPopUp)}
              onEdit={item => editModee(item)}

            />
            <CommentForm author={loggedInUser} postId ={post._id} updateComment={(post) => setPost(post)} />
            
            {post.comments && <CommentDisplay postId={post._id} comments={post.comments} deleteComment={(item)=>{deleteComment(item)}}/>}

          </div>
        ) : (
          <p>Loading post...</p>
        )}
        {showPopUp && (
          <PostForm onClickProp={() => {setShowPopUp(!showPopUp); if (!showPopUp) { setEditMode(false);} }}onSubmitProp={handleFormSubmit} users={users} item={post} editMode={editMode} />
        )}
      </div>
    </>
  );
}

export default SinglePostDetails;
