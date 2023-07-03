/* eslint-disable no-unused-vars */
// import  { useState } from 'react';
import {Routes , Route} from 'react-router-dom';
import RegestrationPage from "./layouts/RegestrationPage";
import SignInPage from "./layouts/SignInPage";
import Test from "./layouts/Test";
import MainPage from "./layouts/MainPage";
import React from 'react';
import { useEffect } from 'react';

const App = () => {
  
      useEffect(() => {
        


      }, []);


  return (
    <>
    <Routes>
      <Route path ='/' element={<MainPage />} />
      <Route path='/signup' element={<RegestrationPage />}/>
      <Route path='/signin' element={<SignInPage />}/>
      <Route path ='/test' element={<Test />} />

    </Routes>


    </>
  );
};

export default App;
