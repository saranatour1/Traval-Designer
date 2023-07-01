// import  { useState } from 'react';
import {Routes , Route} from 'react-router-dom';
import RegestrationPage from "./layouts/RegestrationPage";
import SignInPage from "./layouts/SignInPage";
import Test from "./layouts/Test";
import MainPage from "./layouts/MainPage";

const App = () => {


  // const handleLogout = () => {

  //   fetch('/api/logout', {
  //     method: 'GET',
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  return (
    <>
    <Routes>
      <Route path='/' element={<RegestrationPage />}/>
      <Route path='/signin' element={<SignInPage />}/>
      <Route path ='/test' element={<Test />} />
      <Route path ='/main' element={<MainPage />} />
    </Routes>


    </>
  );
};

export default App;
