import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";


import { useContext, useState } from 'react';

import { userContext } from '../App';

import {  handleGoogleSignIn, handleSignOut, handleWithFacebook, initializeLogInFrameWork, signInWithEmailAndPassword } from './LogIn_Manager';




const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    photo: '',
    error: '',
    success: false
  });

  initializeLogInFrameWork();

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { from } = state || { from: { pathname: '/store' } };
  
  const googleSingIn =() =>{
    handleGoogleSignIn()
    .then(res => {
      handleResponse(res);
      navigate(from, { replace: true });
    })
  }
 const signOut =() =>{
  handleSignOut()
  .then(res => {
    handleResponse(res);
  })
 }
 const facebookSingIn =() =>{
  handleWithFacebook()
  .then(res => {
    handleResponse(res);
    navigate(from, { replace: true });
  })
 }
  const handleSubmit = (e) => {
   

      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
       handleResponse(res);
        navigate(from, { replace: true });
      })
      
    
    e.preventDefault();

  }
  const handleResponse = (res) =>{
    setUser(res);
    setLoggedInUser(res);
  } 
  const handleChange = (event) => {
    let isFormValid = true;
    if (event.target.name === 'email') {
      var mail = /^\S+@\S+\.\S+$/;
      isFormValid = mail.test(event.target.value);

    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length >= 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }

    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }

  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
      <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form onSubmit={handleSubmit} className="d-flex flex-column gap-15">
              {
                  newUser &&
                  <div className='form-group'>
                    <label for="exampleInputEmail1">Name</label>
                    <input className='form-control' type="text" name='name' onBlur={handleChange} placeholder='Enter Your Name' />

                  </div>}

                <div className='form-group'>
                  <label for="exampleInputEmail1">Email address</label>
                  <input class='form-control' aria-describedby="emailHelp" type="text" name='email' onBlur={handleChange} placeholder='Enter Your Email' />

                </div>
                <div className='form-group'>
                  <label for="exampleInputPassword1">Password</label>
                  <input className='form-control' type="password" name='password' onBlur={handleChange} placeholder='Enter Your Password' />

                </div>

                <div>
                <Link to="/forgetpassword">Forgot Password?</Link><br />
                  <br />
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <input class="button border-0" type="submit" value={newUser ? 'Create Acount' : 'Log In'} />
                  <Link to="/signup" className="button text-white link">
                      SignUp
                    </Link>

                  </div>
                  
                </div>

              </form>

            
              <div className="auth">
              <button class="loginBtn loginBtn--google" onClick={googleSingIn}>Sign In With Google</button>
             
              <button class="loginBtn loginBtn--facebook" onClick={facebookSingIn}>Sign In With Facebook</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
