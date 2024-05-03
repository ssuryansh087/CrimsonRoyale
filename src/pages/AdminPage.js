import React, { useState } from 'react'
import '../styles/AdminPage.css';
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Logo from '../components/assets/Logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../database/firestoreDatabase.js';


function AdminPage(){
    const [userName, setUserName] = useState('');
    const [adminID, setAdminID] = useState('');
    var adminData;

    const navigate = useNavigate();

    const getData = async () => {
        const colRef = collection(db, 'Admin');
        const docRef = doc(colRef, 'Staff');
        const docSnap = await getDoc(docRef);
        adminData = docSnap.data();
      
        if (docSnap.exists) {
            console.log("Admin Data Exists!");
        }
        else{
            console.log("Does not exist!");
        }
    };

    getData();

    function handleSubmit(){
        var flag = 0;
        for (let i = 0; i < adminData.adminID.length; i++){
            if (adminData.adminID[i] === Number(adminID) && adminData.adminNames[i] === userName){
                flag = 1;
            }
        }
        if(flag === 1){
            alert('Logged In Successfully!');
            navigate('/AdminBooking');
        }
        else{
            alert('Invalid Admin ID! Please try again.');
        }
    }

    return (
        <div id='AdminContainer'>
            <i className="gg-arrow-left"></i>
            <Link to='/' id='AdminToHome'> Home</Link>
            <img src={Logo} alt='Main Logo' id='AdminLogo'/>

            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Admin Login</h1>
                    <div className='input-box'>
                        <input type="text" placeholder="Enter Admin Username" required value={userName} onChange={(e) => setUserName(e.target.value)}/>
                        <FaUserAlt className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="password"placeholder="Enter Admin ID" maxLength="16" required value={adminID} onChange={(e) => setAdminID(e.target.value)}/>
                        <FaLock className='icon'/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default AdminPage;