import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Body = styled.div`
  background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  font-family: sans-serif;
`;

const Form = styled.form`
  margin: auto;
`;

const Input = styled.input`
  width: 45%;
  padding: 0.8em;
  height: 20px;
  border-radius: 5px;
  border: none;
  background-color: rgb(240, 240, 240);
  font-size: 15px;
  &:hover {
    border: 2px solid #2ea3f8;
  }
`;

const Button = styled.button`
  width: 25%;
  height: 35px;
  border-radius: 5px;
  border: none;
  background-color: #2ea3f8;
  font-size: 17px;
  font-weight: bold;
`;
const Sign = styled.div`
  width: 50%;
  margin: auto;
  text-align: center;
  // background-color:rgb(240, 240, 240);
  line-height: 3.5em;
  padding-top: 10em;
  border-radius: 20px;
`;

const Login = () => {
  const [user, setUser] = useState({});
const navigate=useNavigate();

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }

  const handleLogin = () => {
    console.log(user," user details")
   axios
      .post('https://bluelybackend.herokuapp.com/Auth/login',user)
      .then((res) => {
        console.log(res,"string");

         if (res.data.token) {
        localStorage.setItem('token', JSON.stringify(res.data.token));
          navigate('/remind');
           alert('Loging Successful');
         }else{
          alert("Invalid Credentials");
         }
      })
      .catch((err) => {
        console.log(err,"error");
        alert("Invalid Credentials")
      });
  };

  return (
    <Body>
        <Sign>
          <h1>Sign-In</h1>
          <Input
            type='email'
            placeholder='Email'
            name='email'
            onChange={handleChange}
            required
          />
          <br />
          <Input
            type='password'
            placeholder='password'
            name='password'
            onChange={handleChange}
            required
          />
          <br />
          <Button onClick={handleLogin} style={{ color: 'white', textDecoration: 'none',cursor: 'pointer' }}>
            Sign In
          </Button>
          <br />
          <label>
            Don't have an account?
            <Link to='/' style={{ color: '', textDecoration: 'none' }}>
              Sign Up
            </Link>
          </label>
        </Sign>
    </Body>
  );
}

export default Login;
