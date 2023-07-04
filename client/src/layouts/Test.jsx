import React from 'react';
import Post from '../components/Post Components/Post';

function Test() {
  const fakeFunction = () => {
    console.log('Hi');
  };

  return (
    <>
      <Post item={{}} onDeleteProp={fakeFunction} onEdit={fakeFunction} showPopUp={fakeFunction} />
    </>
  );
}

export default Test;
