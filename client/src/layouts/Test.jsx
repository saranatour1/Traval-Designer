import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Card from "../components/Form Components/Card";
import TopHeading from "../components/Form Components/TopHeading";
import InputItem from "../components/Form Components/InputItem";
import FormButton from '../components/Form Components/FormButton.jsx'

function Test() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
    const handleRegister = () => {
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
        navigate('/main')
        console.log(data); 
      })
      .catch(error => {
        console.error(error);
      });
  };


  return (
    <Card>
      <TopHeading pageName={'Register'} />
      <div className="m-7">
        <form >
          <div className='flex '>
            <InputItem onChangeProp={(element) => setFirstName(element)} type='text' elId='firstName' labelText='First Name' placeholderText='John' />
            <InputItem onChangeProp={(element) => setLastName(element)} type='text' elId='lastName' labelText='Last Name' placeholderText='Doe' />
          </div>
          <InputItem onChangeProp={(element) => setEmail(element)} type='email' elId='email' labelText='Email Address' placeholderText='you@company.com' />
          <InputItem onChangeProp={(element) => setPassword(element)} type='password' elId='password' labelText='Password' placeholderText='Your Password' />
          <InputItem onChangeProp={(element) => setConfirmPassword(element)} type='password' elId='confirmPassword' labelText='Confirm Password' placeholderText='Confirm Password' />
          <FormButton btnText='Register' onClickProp={handleRegister} />
        </form>
      </div>
    </Card>
  );
}

export default Test;
