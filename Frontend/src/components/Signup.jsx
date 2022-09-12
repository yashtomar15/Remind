import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/signup.module.css';

const MainDiv = styled.div`
  width: 95%;
  display: flex;
  gap: 10px;
  margin: auto;
  text-align: center;
  
`;

const Img = styled.img`
  width: 105%;
  height:580px;
  position:relative;
  left:-33px;
  border-radius: 10px;
`;

// const Input = styled.input`
//   width: 85%;
//   height: 35px;
//   border-radius: 7px;
// `;
const Input = styled.input`
  width: 75%;
  padding: 0.8em;
  height: 20px;
  border-radius: 5px;
  border :none;
  background-color: rgb(240, 240, 240);
  font-size: 15px;
  &:hover {
    border: 2px solid #2ea3f8;
  }
`;
const Form = styled.form`
  padding: 1em;
  line-height: 3;
`;

const Button = styled.button`
  width: 45%;
  height: 40px;
  border-radius: 5px;
  background-color: #2ea3f8;
  font-size: 17px;
  font-weight: bold;
  border: none;
`;

const Signup = () => {
  const [signUpdata, setsignUpdata] = useState({});
const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignUpdata({ ...signUpdata, [name]: value });
  };

  const getUserToken=(user)=>{
    axios
    .post('https://bluelybackend.herokuapp.com/Auth/login',user)
    .then((res) => {
      console.log(res,"string");
      if (res.data.token) {
      localStorage.setItem('token', JSON.stringify(res.data.token));
        navigate('/remind');
        alert("Signed Up succesfully");
      }
    })
    .catch((err)=>{
       console.log("error occured",err);
       alert('Internal error try after sometime');
    })
  }



  const handleSignup = (e) => {
    let userDetails={
      email:signUpdata.email,
      password:signUpdata.password
    }
    e.preventDefault();
    console.log(signUpdata,"signup details")
    axios
      .post('https://bluelybackend.herokuapp.com/Auth/signup', signUpdata)
      .then((res) => {
        console.log(res.data,'from signup databse')
        if (res.data.response) {
          getUserToken(userDetails);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Internal error try after sometime");
      });
  };

  return (
    <div>
      <div style={{marginTop:"50px"}}></div>
      <MainDiv>
        <div>
          <Img src={process.env.PUBLIC_URL+"reminder-notification.jpg"} ></Img>
        </div>
        
        <div style={{ margin: 'auto',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',padding: 20 }}>
          <div style={{ textAlign: 'left' }}>
            <h1>Sign Up</h1>
            <p>Enter your email and password to register</p>
          </div>
          <Form onSubmit={handleSignup} >
            <Input
              type='text'
              placeholder='First Name'
              name='firstName'
              autoComplete='on'
              onChange={handleChange}
              required
            />
            <Input
              type='text'
              placeholder='Last Name'
              name='lastName'
              autoComplete='on'
              onChange={handleChange}
              required
            /><br/>
            <Input
              type='email'
              placeholder='Email'
              name='email'
              onChange={handleChange}
              required
            /><br/>
            <Input
              type='password'
              name='password'
              placeholder='password '
              onChange={handleChange}
              required
            />
            <br />
            <input type='checkbox' required />
            <label>I agree the Terms and Conditions</label>
            <br />
            <input className={styles.signupButton} type={"submit"} value="SIGN UP"/>
          </Form>
          <br />
          <br />
          <label>
            Already have an account? 
            <Link
              to='/login'
              style={{ color: '#4b90fe', textDecoration: 'none' }}>
               Sign-In
            </Link>
          </label>
        </div>
      </MainDiv>
    </div>
  );
};

export default Signup;
