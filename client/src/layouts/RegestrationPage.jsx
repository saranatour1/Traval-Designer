
import { useState } from 'react';
import {useNavigate , Link} from 'react-router-dom';
import Card from "../components/Form Components/Card";
import TopHeading from "../components/Form Components/TopHeading";
import InputItem from "../components/Form Components/InputItem";
import FormButton from '../components/Form Components/FormButton.jsx'
// eslint-disable-next-line no-unused-vars
import React from 'react';


function RegestrationPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] =useState([]);

  const navigate = useNavigate();

  // Here, Using Fetch Instead of axios, it serves the same thing
  // adding less Libraries to do simple tasks is the reason to use fetch over axsios
  
  const handleRegister = () => {

    // Perform validation

    if (firstName.trim() === '') {
      addError('First name is required');
    }
  
    if (lastName.trim() === '') {
      addError('Last name is required');
    }
  
    if (email.trim() === '') {
      addError('Email address is required');
    }
  
    if (password.trim() === '') {
      addError('Password is required');
    }
  
    if (password !== confirmPassword) {
      addError('Passwords do not match');
    }


  fetch('http://localhost:8000/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName, lastName, email, password, confirmPassword }),
  })
    .then(response => response.json())
    .then(data => {
      // If successfull Go to the main page

      if(data.errors){
        console.log(data.errors);

        addError(data.errors.confirmPassword.message);
        addError(data.errors.firstName.message);
        addError(data.errors.lastName.message);
        addError(data.errors.email.message);
        addError(data.errors.password.message);


      }else{
        const token = data.token;
        if (token) {
          localStorage.setItem('token', token);
          localStorage.setItem('userId', data.id);
        }
        navigate('/dashboard');
      }

      // console.log(data); 
    })
    .catch(error => {

      console.log(error);
    });
};
console.log(errors , 'hie')

function removeErrorAfterDelay(index, delay, setError) {
  setTimeout(() => {
    setError((prevErrors) => prevErrors.filter((_, i) => i !== index));
  }, delay);
}

function addError(errorMessage) {
  const newErrors = [...errors, errorMessage];
  setErrors(newErrors);

  const index = newErrors.length - 1;
  removeErrorAfterDelay(index, 6000, setErrors);
}



  return (
    <div>
      <Card>
      <TopHeading pageName={'Register'} />
      <div className="m-7">
        <form onSubmit={e=>e.preventDefault()} >
        {errors.map((item, idx) => (
          <p key={idx} className="text-red-500 mt-2">{item}</p>
        ))}
          <div className='flex '>
            <InputItem onChangeProp={(element) => setFirstName(element)} type='text' elId='firstName' labelText='First Name' placeholderText='John' />
            <InputItem onChangeProp={(element) => setLastName(element)} type='text' elId='lastName' labelText='Last Name' placeholderText='Doe' />
          </div>
          <InputItem onChangeProp={(element) => setEmail(element)} type='email' elId='email' labelText='Email Address' placeholderText='you@company.com' />
          <InputItem onChangeProp={(element) => setPassword(element)} type='password' elId='password' labelText='Password' placeholderText='Your Password' />
          <InputItem onChangeProp={(element) => setConfirmPassword(element)} type='password' elId='confirmPassword' labelText='Confirm Password' placeholderText='Confirm Password' />
          <FormButton btnText='Register' onClickProp={handleRegister} />
            <p className="text-sm text-center text-gray-400">Already Have an Account?  <Link to='/signin' className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign In</Link>!</p>
        </form>
      </div>
    </Card>
    </div>
  )
}

export default RegestrationPage;