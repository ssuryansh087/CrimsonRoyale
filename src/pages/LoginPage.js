import firebase from '../database/firebaseConfig';
import '../styles/LoginPage.css';
import Logo2 from '../components/assets/Logo2.png';
import Icon from '../components/assets/Icon.png';
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

function LoginPage() {
  let [buttonText, setButtonText] = useState('Show');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const HandleClick = () =>{
    setButtonText(showPassword === true ? 'Show' : 'Hide');
    setShowPassword((prev) => !prev);
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in:', userCredential.user);
      const UserID = userCredential.user.uid;
      alert(UserID);
      alert("User Logged in Successfully!");
      navigate('/Receipt', {state: {
        id: UserID
      }});
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
    <div>
    <div className='leftContainer'>
      <i class="gg-arrow-left"></i>
      <Link to='/' id='BackToHome'> Home</Link>
      <h1 id='loginText'>Login to Your Account</h1>
      <p id='loginUsingSocial'>Login using social networks</p>
      
      <div id='socialIcons'>
        <Link to="/" className="fa fa-google"/>
        <Link to="/" className="fa fa-facebook"/>
      </div>
      
      <p id='loginUsingSocial'>OR</p>
      
      <form onSubmit={handleLogin}>
        <div id='usernameID'>
          <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} name='username' required
          id='usernameInput'/>
        </div>
        
        <div id='passwordID'>
          <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} maxLength="16" placeholder='Password' name='password' required
          id='passwordInput'/>
          <button type='button' className='toggleButton' onClick={HandleClick}>{buttonText}</button>
        </div>

        <button type='submit' id='submitButton'>Sign In</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <img src={Icon} alt='Admin Icon' id='AdminIcon'/>
      <Link to='/AdminPage' id='adminButton'>Admin Login</Link>
    </div>
    <div className='rightContainer'>
      <img src={Logo2} id='Logo' alt='Logo'/>
      <h1 id='newHere'>New Here?</h1>
      <p id='SignUpText'>Sign Up to discover more from Crimson Royale!</p>
      <p className='offers'>-Save Your Favorite Dishes</p>
      <p className='offers'>-Get Recommendations, Offers</p>
      <p className='offers'>& Much More!</p>
      <Link to='/SignUpPage'><button type='submit' id='signUpButton'>Sign Up</button></Link>
    </div>
    </div>
    </>
  );
}

export default LoginPage;