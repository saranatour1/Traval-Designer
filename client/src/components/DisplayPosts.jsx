import React from 'react';
import Post from './Post Components/Post';

function DisplayPosts({ items }) {
  // console.log(items[0]);
  console.log(items)

  return (
    <div className='mx-auto mt-10'>
      {items.length > 0 ? (
        items.map((item, idx) => <Post key={idx} item={item} />)
      ) : (
        <p>No posts to display</p>
      )}
    </div>
  );
}

export default DisplayPosts;
