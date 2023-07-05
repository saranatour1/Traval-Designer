import React from 'react';
import Post from './Post Components/Post';

// eslint-disable-next-line react/prop-types
function DisplayPosts({ items ,onDeleteProp ,showPopUp , onEdit }) {
  // console.log(items[0]);
  // console.log(items)

  return (
    <div className='mx-auto mt-10'>
      {items.length > 0 ? (
        items.map((item, idx) => <Post key={idx} item={item} onDeleteProp={onDeleteProp} showPopUp={showPopUp}  onEdit={onEdit} /> )
      ) : (
        <p className='text-center'>No posts to display</p>
      )}
    </div>
  );
}

export default DisplayPosts;
