import React, { useState } from 'react';
import '../styles/Receipt.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'firebase/compat/firestore';
import firebase from '../database/firebaseConfig';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../database/firestoreDatabase.js';
import { useLocation } from 'react-router-dom';
import QRCode from "react-qr-code";

function CustomInput({ value, onClick }) {
  return <button className="custom-date-input" onClick={onClick}>{value}</button>;
}

export default function Receipt() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [bookingName, setBookingName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [QRID, setQRID] = useState('');

  const location = useLocation();
  const userID = location.state?.id;

  const generateRandomNumber = () => {
    const characters = 'abcdef0123456789';
    let randomString = '';
    const positionsOfHyphens = [8, 13, 18, 23]; 

    for (let i = 0; i < 36; i++) {
      if (positionsOfHyphens.includes(i)) {
        randomString += '-';
      } else {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
      }
    }
    return randomString;
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const colRef = collection(db, 'Booking');
    const bookingID = generateRandomNumber();
    setQRID(bookingID);
    const docRef = doc(colRef, bookingID);
    const docSnap = await getDoc(docRef);

    const TableFor = document.querySelector("#tableFor");
    const NumberOfPeople = TableFor.value;

    const PaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    
    if (!docSnap.exists()) {
      try {
        await firebase.firestore().collection('Booking').doc(bookingID).set({
          bookingName: bookingName,
          bookingEmail: email,
          bookingPhone: phone,
          numberPeople: NumberOfPeople,
          paymentMethod: PaymentMethod,
          isCheckedIn: false,
          isCheckedOut: false,
          userId: userID,
          ratingDone: false
        });
        alert("Details Confirmed! Table has been booked successfully.");

        const dialog = document.getElementById("QRDialog");
        dialog.showModal(); 
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Booking ID already exists, please try again.");
    }
  }

  function closeDialog(){
    const dialog = document.getElementById("QRDialog");
    dialog.close(); 
  }

  return (
    <>
      <Navbar/>
      <div style={{backgroundColor: "#42240c", margin: "5px", borderRadius: "10px"}}>
        <br/><br/>
        <form onSubmit={handleSubmit}>
          <div id="receipt_container" >
            <div id="textt">
              <h1 style={{textAlign: "center"}}>Confirmation Details</h1>
            </div>
            <div className="small">
              <div id="one">
                <h2 id='BookingFor'>Booking For</h2>
                <input type="text" id="BookingName" placeholder="Enter Your Name" value={bookingName} onChange={(e) => setBookingName(e.target.value)}/>
              </div>
              <div id="two"> 
                <h1 id='ReceiptDate'>Date</h1>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} customInput={<CustomInput />} />
              </div>
            </div>
            <div className='bar1'>
              <h1><pre>DETAILS                           INFORMATION </pre></h1>
            </div>
            <div class="bar2">
              <div class="form-group">
                <label for="email">E-Mail</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>

              <div class="form-group">
                <label for="password">Phone Number</label>
                <input type="name" id="password" name="password" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
              </div>

              <div class="form-group">
                <label for="tableFor">Table For</label>
                <select id="tableFor" name="tableFor">
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                  <option value="5">5 people</option>
                  <option value="6+">6+ people</option>
                </select>
              </div>
            </div>
            <div class="bar3">
              <h1 id='PaymentMethod'>HOW WOULD YOU LIKE TO PAY AT COUNTER?</h1>
              <div class="payment-option">
                <div>
                <label for="credit-card">
                  <input type="radio" id="credit-card" className='ReceiptRadio' name="payment-method" value="Credit Card" checked/>
                  Credit Card
                </label>
                </div>
              
                <div>
                <label for="paypal">
                  <input type="radio" id="paypal" className='ReceiptRadio' name="payment-method" value="PayPal"/>
                  PayPal
                </label>
                </div>

                <div>
                <label for="debit-card">
                  <input type="radio" id="debit-card" className='ReceiptRadio' name="payment-method" value="Debit Card"/>
                  Debit Card
                </label>
                </div>
              </div>
              
              <button type="submit" id='SubmitPayment'>Submit Payment</button>
            </div>
          </div>
        </form>
        <br/><br/>
        <dialog id='QRDialog'>
            <h2>Scan this at the Restaurant to Confirm Your Table.</h2>
            <QRCode value={QRID} style={{width: "80%", marginLeft: "10%"}} />
            <br/>
            <button type='button' id='QRClose' onClick={closeDialog}>Close</button>
        </dialog>
      </div>
      <Footer/>
    </>
  );
}
