/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {useNavigate ,Link} from 'react-router-dom';
import Card from "../components/Form Components/Card";
import TopHeading from "../components/Form Components/TopHeading";
import InputItem from "../components/Form Components/InputItem";
import FormButton from '../components/Form Components/FormButton.jsx'
import React from 'react';


function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include', // Include cookies in the request
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)

        const token = data.token;
        if (token) {
          localStorage.setItem('token', token);
          localStorage.setItem('userId', data.id);
          navigate('/dashboard');
        } else {
          throw new Error('Login failed');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  
  return (
    <Card>
      <TopHeading pageName={'Sign In'} />
      <div className="m-7">
        <form >
          <InputItem onChangeProp={(element) => setEmail(element)} type='email' elId='email' labelText='Email Address' placeholderText='you@company.com' />
          <InputItem onChangeProp={(element) => setPassword(element)} type='password' elId='password' labelText='Password' placeholderText='Your Password' />
          <FormButton btnText='Sign In' onClickProp={handleLogin} />
          <p className="text-sm text-center text-gray-400">Not a Member?   <Link to='/signup' className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign Up</Link>!</p>

        </form>
      </div>
    </Card>
  )
}

export default SignInPage