import firebase from '../database/firebaseConfig.js';
import 'firebase/compat/firestore'
import '../styles/SignUpPage.css';
import Logo2 from '../components/assets/Logo2.png';
import Icon from '../components/assets/Icon.png';
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function SignUpPage() {
    let [buttonText, setButtonText] = useState('Show');
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const HandleClick = () =>{
        setButtonText(showPassword === true ? 'Show' : 'Hide');
        setShowPassword((prev) => !prev)
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    const handleRegister = async (e) => {
      e.preventDefault();

      try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        alert("Account Created Successfully!")
        navigate('/');
        const uid = userCredential.user.uid;

        await firebase.firestore().collection('Users').doc(uid).set({
        name,
        email
        });
        alert("Firebase!");
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
  
    return (
    <>
    <div>
    <div className='leftContainer2'>
        <p id='leftArrow2'>&#x2190;</p>
        <Link to='/' id='BackToHome2'> Home</Link>  
        <img src={Logo2} id='Logo2' alt='Logo'/>
        <h1 id='newHere2'>Already a Member?</h1>
        <p id='SignUpText2'>Sign In to Crimson Royale!</p>
        <p className='offers2'>-Save Your Favorite Dishes</p>
        <p className='offers2'>-Get Recommendations, Offers</p>
        <p className='offers2'>& Much More!</p>
        <Link to='/LoginPage'><button type='submit' id='signUpButton2'>Sign In</button></Link>
    </div>
    <div className='rightContainer2'>
    <h1 id='loginText2'>Create Account</h1>
      <p id='loginUsingSocial2'>Sign Up using social networks</p>
      
      <div id='socialIcons2'>
        <a href="/" className="fa fa-google"> </a>
        <a href="/" className="fa fa-facebook"> </a>
      </div>
      
      <p id='loginUsingSocial2'>OR</p>
      
      <form onSubmit={handleRegister}>
        <div id='nameID2'>
          <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} name='name' required
          id='nameInput2'/>
        </div>
        
        <div id='usernameID'>
          <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} name='username' required
          id='usernameInput2'/>
        </div>
        
        <div id='passwordID'>
          <input type={showPassword ? 'text' : 'password'}  placeholder='Password' name='password' required
          id='passwordInput2' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type='button' className='toggleButton' onClick={HandleClick}>{buttonText}</button>
        </div>

        <button type='submit' id='submitButton2'>Sign Up</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <img src={Icon} alt='Admin Icon' id='AdminIcon2'/>
      <Link to='/AdminPage' id='adminButton2'>Admin Login</Link>
    </div>
    </div>
    </>
  );
}

export default SignUpPage;