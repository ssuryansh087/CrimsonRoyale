import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/BookATable.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Layout from '../components/assets/Layout.png';
import 'firebase/compat/firestore';
import firebase from '../database/firebaseConfig';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../database/firestoreDatabase.js';

function BookATable(){
    const [startDate, setStartDate] = useState(new Date());
    var colorData;

    const getData = async (currentDate) => {
        const colRef = collection(db, 'Tables');
        const docRef = doc(colRef, currentDate);
        const docSnap = await getDoc(docRef);

        const currentD = new Date();
        const currentTimeHours = currentD.getHours();
        const currentTimeMinutes = currentD.getMinutes();
        var currentTime = (currentTimeHours)*100 + (currentTimeMinutes);
        var currentAMPM = 'AM'; 
        if(currentTime >= 1200){
            currentTime = currentTime - 1200;
            currentAMPM = 'PM';
        }
      
        if (docSnap.exists) {
        colorData = docSnap.data();

        if (colorData !== undefined){
            const buttons0 = document.getElementsByClassName("TwoSeat");
            for(let i = 0; i < colorData.TwoSeatTime.length; i++){
                let TimeString = colorData.TwoSeatTime[i];
                if(TimeString === 'AVAILABLE'){
                    buttons0[i].style.backgroundColor = 'seagreen';
                }
                else{
                    var TimeArray = TimeString.split('');
                    var StartTime = TimeArray[0] + TimeArray[1] + TimeArray[2] + TimeArray[3];
                    var StartAMPM = TimeArray[4] + TimeArray[5];
                    var EndTime = TimeArray[6] + TimeArray[7] + TimeArray[8] + TimeArray[9];
                    var EndAMPM = TimeArray[10] + TimeArray[11];
                    StartTime = Number(StartTime);
                    EndTime = Number(EndTime);
                    if(StartAMPM === EndAMPM){
                        if(currentAMPM === StartAMPM){
                            if(currentTime >= StartTime && currentTime <= EndTime){
                                buttons0[i].style.backgroundColor = 'red';
                                buttons0[i].disabled = "true";
                            }
                            else{
                                buttons0[i].style.backgroundColor = 'seagreen';
                            }
                        }
                        else{
                            buttons0[i].style.backgroundColor = 'seagreen';
                        }
                    }
                    else{
                        if(currentAMPM === StartAMPM){
                            if(currentTime >= StartTime){
                                buttons0[i].style.backgroundColor = 'red';
                            }
                            else{
                                buttons0[i].style.backgroundColor = 'seagreen';
                            }
                        }
                        else{
                            if(currentTime <= EndTime){
                                buttons0[i].style.backgroundColor = 'red';
                            }
                            else{
                                buttons0[i].style.backgroundColor = 'seagreen';
                            }
                        }
                    }
                }
            }

            const buttons1 = document.getElementsByClassName("ThreeSeat");
            for(let i = 0; i < colorData.ThreeSeatTime.length; i++){
                let TimeString = colorData.ThreeSeatTime[i];
                if(TimeString === 'AVAILABLE'){
                    buttons1[i].style.backgroundColor = 'seagreen';
                }
                else{
                    TimeArray = TimeString.split('');
                    StartTime = TimeArray[0] + TimeArray[1] + TimeArray[2] + TimeArray[3];
                    StartAMPM = TimeArray[4] + TimeArray[5];
                    EndTime = TimeArray[6] + TimeArray[7] + TimeArray[8] + TimeArray[9];
                    EndAMPM = TimeArray[10] + TimeArray[11];
                    StartTime = Number(StartTime);
                    EndTime = Number(EndTime);
                    if(StartAMPM === EndAMPM){
                        if(currentAMPM === StartAMPM){
                            if(currentTime >= StartTime && currentTime <= EndTime){
                                buttons1[i].style.backgroundColor = 'red';
                            }
                            else{
                                buttons1[i].style.backgroundColor = 'seagreen';
                            }
                        }
                        else{
                            buttons1[i].style.backgroundColor = 'seagreen';
                        }
                    }
                    else{
                        if(currentAMPM === StartAMPM){
                            if(currentTime >= StartTime){
                                buttons1[i].style.backgroundColor = 'red';
                            }
                            else{
                                buttons1[i].style.backgroundColor = 'seagreen';
                            }
                        }
                        else{
                            if(currentTime <= EndTime){
                                buttons1[i].style.backgroundColor = 'red';
                            }
                            else{
                                buttons1[i].style.backgroundColor = 'seagreen';
                            }
                        }
                    }
                }
            }

            const buttons2 = document.getElementsByClassName("FourSeat");
            for(let i = 0; i < colorData.FourSeatTime.length; i++){
                let TimeString = colorData.FourSeatTime[i];
                if(TimeString === 'AVAILABLE'){
                    buttons2[i].style.backgroundColor = 'seagreen';
                }
                else{
                    TimeArray = TimeString.split('');
                    StartTime = TimeArray[0] + TimeArray[1] + TimeArray[2] + TimeArray[3];
                    StartAMPM = TimeArray[4] + TimeArray[5];
                    EndTime = TimeArray[6] + TimeArray[7] + TimeArray[8] + TimeArray[9];
                    EndAMPM = TimeArray[10] + TimeArray[11];
                    StartTime = Number(StartTime);
                    EndTime = Number(EndTime);
                    if(StartAMPM === EndAMPM){
                        if(currentAMPM === StartAMPM){
                            if(currentTime >= StartTime && currentTime <= EndTime){
                                buttons2[i].style.backgroundColor = 'red';
                            }
                            else{
                                buttons2[i].style.backgroundColor = 'seagreen';
                            }
                        }
                        else{
                            buttons2[i].style.backgroundColor = 'seagreen';
                        }
                    }
                    else{
                        if(currentAMPM === StartAMPM){
                            if(currentTime >= StartTime){
                                buttons2[i].style.backgroundColor = 'red';
                            }
                            else{
                                buttons2[i].style.backgroundColor = 'seagreen';
                            }
                        }
                        else{
                            if(currentTime <= EndTime){
                                buttons2[i].style.backgroundColor = 'red';
                            }
                            else{
                                buttons2[i].style.backgroundColor = 'seagreen';
                            }
                        }
                    }
                }
            }

            const buttons3 = document.getElementsByClassName("FiveSeat");
            for(let i = 0; i < colorData.FiveSeatTime.length; i++){
                let TimeString = colorData.FiveSeatTime[i];
                if(TimeString === 'AVAILABLE'){
                    buttons3[i].style.backgroundColor = 'seagreen';
                }
                else{
                    TimeArray = TimeString.split('');
                    StartTime = TimeArray[0] + TimeArray[1] + TimeArray[2] + TimeArray[3];
                    StartAMPM = TimeArray[4] + TimeArray[5];
                    EndTime = TimeArray[6] + TimeArray[7] + TimeArray[8] + TimeArray[9];
                    EndAMPM = TimeArray[10] + TimeArray[11];
                    StartTime = Number(StartTime);
                    EndTime = Number(EndTime);
                    if(StartAMPM === EndAMPM){
                        if(currentAMPM === StartAMPM){
                            if(currentTime >= StartTime && currentTime <= EndTime){
                                buttons3[i].style.backgroundColor = 'red';
                            }
                            else{
                                buttons3[i].style.backgroundColor = 'seagreen';
                            }
                        }
                        else{
                            buttons3[i].style.backgroundColor = 'seagreen';
                        }
                    }
                    else{
                        if(currentAMPM === StartAMPM){
                            if(currentTime >= StartTime){
                                buttons3[i].style.backgroundColor = 'red';
                            }
                            else{
                                buttons3[i].style.backgroundColor = 'seagreen';
                            }
                        }
                        else{
                            if(currentTime <= EndTime){
                                buttons3[i].style.backgroundColor = 'red';
                            }
                            else{
                                buttons3[i].style.backgroundColor = 'seagreen';
                            }
                        }
                    }
                }
            }

            const buttons4 = document.getElementsByClassName("EightSeat");
            for(let i = 0; i < colorData.EightSeatTime.length; i++){
                let TimeString = colorData.EightSeatTime[i];
                if(TimeString === 'AVAILABLE'){
                    buttons4[i].style.backgroundColor = 'seagreen';
                }
                else{
                    TimeArray = TimeString.split('');
                    StartTime = TimeArray[0] + TimeArray[1] + TimeArray[2] + TimeArray[3];
                    StartAMPM = TimeArray[4] + TimeArray[5];
                    EndTime = TimeArray[6] + TimeArray[7] + TimeArray[8] + TimeArray[9];
                    EndAMPM = TimeArray[10] + TimeArray[11];
                    StartTime = Number(StartTime);
                    EndTime = Number(EndTime);
                    if(StartAMPM === EndAMPM){
                        if(currentAMPM === StartAMPM){
                            if(currentTime >= StartTime && currentTime <= EndTime){
                                buttons4[i].style.backgroundColor = 'red';
                            }
                            else{
                                buttons4[i].style.backgroundColor = 'seagreen';
                            }
                        }
                        else{
                            buttons4[i].style.backgroundColor = 'seagreen';
                        }
                    }
                    else{
                        if(currentAMPM === StartAMPM){
                            if(currentTime >= StartTime){
                                buttons4[i].style.backgroundColor = 'red';
                            }
                            else{
                                buttons4[i].style.backgroundColor = 'seagreen';
                            }
                        }
                        else{
                            if(currentTime <= EndTime){
                                buttons4[i].style.backgroundColor = 'red';
                            }
                            else{
                                buttons4[i].style.backgroundColor = 'seagreen';
                            }
                        }
                    }
                }
            }
        }

        else{   
            const buttons0 = document.getElementsByClassName("TwoSeat");
            for(let i = 0; i < buttons0.length; i++){
                buttons0[i].style.backgroundColor = 'seagreen';
            }

            const buttons1 = document.getElementsByClassName("ThreeSeat");
            for(let i = 0; i < buttons1.length; i++){
                buttons1[i].style.backgroundColor = 'seagreen';
            }
            
            const buttons2 = document.getElementsByClassName("FourSeat");
            for(let i = 0; i < buttons2.length; i++){
                buttons2[i].style.backgroundColor = 'seagreen';
            }

            const buttons3 = document.getElementsByClassName("FiveSeat");
            for(let i = 0; i < buttons3.length; i++){
                buttons3[i].style.backgroundColor = 'seagreen';
            }

            const buttons4 = document.getElementsByClassName("EightSeat");
            for(let i = 0; i < buttons4.length; i++){
                buttons4[i].style.backgroundColor = 'seagreen';
            }
        }
        }
        else{
            console.log("Does not exist!");
        }
    };

    function myFunction(){
        var selectElement = document.querySelector('#People');
        var x = selectElement.value;

        if ((x === '2') || (x === '1')){
            const buttons0 = document.getElementsByClassName("TwoSeat");
            for(let i = 0; i < buttons0.length; i++){
                buttons0[i].style.backgroundColor = "seagreen";
                buttons0[i].disabled = false;
            }
            const buttons1 = document.getElementsByClassName("ThreeSeat");
            for(let i = 0; i < buttons1.length; i++){
                buttons1[i].style.backgroundColor = 'gray';
                buttons1[i].disabled = true;
            }
            const buttons2 = document.getElementsByClassName("FourSeat");
            for(let i = 0; i < buttons2.length; i++){
                buttons2[i].style.backgroundColor = 'gray';
                buttons2[i].disabled = true;
            }
            const buttons3 = document.getElementsByClassName("FiveSeat");
            for(let i = 0; i < buttons3.length; i++){
                buttons3[i].style.backgroundColor = 'gray';
                buttons3[i].disabled = true;
            }
            const buttons4 = document.getElementsByClassName("EightSeat");
            for(let i = 0; i < buttons4.length; i++){
                buttons4[i].style.backgroundColor = 'gray';
                buttons4[i].disabled = true;
            }
        }
        if (x === '3'){
            const buttons0 = document.getElementsByClassName("TwoSeat");
            for(let i = 0; i < buttons0.length; i++){
                buttons0[i].style.backgroundColor = 'gray';
                buttons0[i].disabled = true;
            }
            const buttons1 = document.getElementsByClassName("ThreeSeat");
            for(let i = 0; i < buttons1.length; i++){
                buttons1[i].style.backgroundColor = 'seagreen';
                buttons1[i].disabled = false;
            }
            const buttons2 = document.getElementsByClassName("FourSeat");
            for(let i = 0; i < buttons2.length; i++){
                buttons2[i].style.backgroundColor = 'gray';
                buttons2[i].disabled = true;
            }
            const buttons3 = document.getElementsByClassName("FiveSeat");
            for(let i = 0; i < buttons3.length; i++){
                buttons3[i].style.backgroundColor = 'gray';
                buttons3[i].disabled = true;
            }
            const buttons4 = document.getElementsByClassName("EightSeat");
            for(let i = 0; i < buttons4.length; i++){
                buttons4[i].style.backgroundColor = 'gray';
                buttons4[i].disabled = true;
            }
        }
        if (x === '4'){
            const buttons0 = document.getElementsByClassName("TwoSeat");
            for(let i = 0; i < buttons0.length; i++){
                buttons0[i].style.backgroundColor = 'gray';
                buttons0[i].disabled = true;
            }
            const buttons1 = document.getElementsByClassName("ThreeSeat");
            for(let i = 0; i < buttons1.length; i++){
                buttons1[i].style.backgroundColor = 'gray';
                buttons1[i].disabled = true;
            }
            const buttons2 = document.getElementsByClassName("FourSeat");
            for(let i = 0; i < buttons2.length; i++){
                buttons2[i].style.backgroundColor = 'seagreen';
                buttons2[i].disabled = false;
            }
            const buttons3 = document.getElementsByClassName("FiveSeat");
            for(let i = 0; i < buttons3.length; i++){
                buttons3[i].style.backgroundColor = 'gray';
                buttons3[i].disabled = true;
            }
            const buttons4 = document.getElementsByClassName("EightSeat");
            for(let i = 0; i < buttons4.length; i++){
                buttons4[i].style.backgroundColor = 'gray';
                buttons4[i].disabled = true;
            }
        }
        if (x === '5'){
            const buttons0 = document.getElementsByClassName("TwoSeat");
            for(let i = 0; i < buttons0.length; i++){
                buttons0[i].style.backgroundColor = 'gray';
                buttons0[i].disabled = true;
            }
            const buttons1 = document.getElementsByClassName("ThreeSeat");
            for(let i = 0; i < buttons1.length; i++){
                buttons1[i].style.backgroundColor = 'gray';
                buttons1[i].disabled = true;
            }
            const buttons2 = document.getElementsByClassName("FourSeat");
            for(let i = 0; i < buttons2.length; i++){
                buttons2[i].style.backgroundColor = 'gray';
                buttons2[i].disabled = true;
            }
            const buttons3 = document.getElementsByClassName("FiveSeat");
            for(let i = 0; i < buttons3.length; i++){
                buttons3[i].style.backgroundColor = 'seagreen';
                buttons3[i].disabled = false;
            }
            const buttons4 = document.getElementsByClassName("EightSeat");
            for(let i = 0; i < buttons4.length; i++){
                buttons4[i].style.backgroundColor = 'gray';
                buttons4[i].disabled = true;
            }
        }
        if(x === '6' || x === '7' || x === '8'){
            const buttons0 = document.getElementsByClassName("TwoSeat");
            for(let i = 0; i < buttons0.length; i++){
                buttons0[i].style.backgroundColor = 'gray';
                buttons0[i].disabled = true;
            }
            const buttons1 = document.getElementsByClassName("ThreeSeat");
            for(let i = 0; i < buttons1.length; i++){
                buttons1[i].style.backgroundColor = 'gray';
                buttons1[i].disabled = true;
            }
            const buttons2 = document.getElementsByClassName("FourSeat");
            for(let i = 0; i < buttons2.length; i++){
                buttons2[i].style.backgroundColor = 'gray';
                buttons2[i].disabled = true;
            }
            const buttons3 = document.getElementsByClassName("FiveSeat");
            for(let i = 0; i < buttons3.length; i++){
                buttons3[i].style.backgroundColor = 'gray';
                buttons3[i].disabled = true;
            }
            const buttons4 = document.getElementsByClassName("EightSeat");
            for(let i = 0; i < buttons4.length; i++){
                buttons4[i].style.backgroundColor = 'seagreen';
                buttons4[i].disabled = false;
            }
        }
    }

    function Clicked(){
        alert("Clicked!");
    }

    const dynamicDate = async(date) => {
        setStartDate(date);
        const currentDateString = date.toString();
        const currentDateArray = currentDateString.split(" ");
        const currentDate = currentDateArray[1] + currentDateArray[2] + currentDateArray[3];
        getData(currentDate);

        const colRef = collection(db, 'Tables');
        const docRef = doc(colRef, currentDate);
        const docSnap = await getDoc(docRef);

        colorData = docSnap.data();

        const TwoSeatTime = []; 
        const buttons0 = document.getElementsByClassName("TwoSeat");

        const ThreeSeatTime = [];
        const buttons1 = document.getElementsByClassName("ThreeSeat");

        const FourSeatTime = [];
        const buttons2 = document.getElementsByClassName("FourSeat");

        const FiveSeatTime = [];
        const buttons3 = document.getElementsByClassName("FiveSeat");

        const EightSeatTime = [];
        const buttons4 = document.getElementsByClassName("EightSeat");

        if(colorData === undefined){
            for(let i = 0; i < buttons0.length; i++){
                TwoSeatTime.push('AVAILABLE');
            }

            for(let i = 0; i < buttons1.length; i++){
                ThreeSeatTime.push('AVAILABLE');
            }

            for(let i = 0; i < buttons2.length; i++){
                FourSeatTime.push('AVAILABLE');
            }

            for(let i = 0; i < buttons3.length; i++){
                FiveSeatTime.push('AVAILABLE');
                    
            }

            for(let i = 0; i < buttons4.length; i++){
                EightSeatTime.push('AVAILABLE');
            }

            try{
                await firebase.firestore().collection('Tables').doc(currentDate).set({
                    TwoSeatTime,
                    ThreeSeatTime,
                    FourSeatTime,
                    FiveSeatTime,
                    EightSeatTime
                });
            }
            catch (error){
                alert(error.message);
            }
        }
    }

    const currentDateString = startDate.toString();
    const currentDateArray = currentDateString.split(" ");
    const currentDate = currentDateArray[1] + currentDateArray[2] + currentDateArray[3];
    getData(currentDate);

    return(
        <div>
            <Navbar />
            <div id="BookingContainer1">
                <div style={{marginLeft: "38%"}}> 
                <p id="BookingDatep">Booking Date : <DatePicker id="DatePicker1" selected={startDate} onChange={(date) => dynamicDate(date)} /></p>
                </div>
                <div id="NumberOfPeople">
                    <label id="NoOfPeople">Number of People : </label>
                    <select id="People" onChange={myFunction}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </div>
                <div id="BookingLayout">
                    <img src={Layout} alt="Restaurant Layout" id="LayoutImage"/>
                    <Link to='/Receipt'>
                    <button className="FourSeat" id="FourSeat1" onClick={Clicked}>‎</button>
                    <button className="FourSeat" id="FourSeat2" onClick={Clicked}>‎</button>
                    <button className="FourSeat" id="FourSeat3" onClick={Clicked}>‎</button>
                    <button className="FourSeat" id="FourSeat4" onClick={Clicked}>‎</button>
                    <button className="FourSeat" id="FourSeat5" onClick={Clicked}>‎</button>
                    <button className="FourSeat" id="FourSeat6" onClick={Clicked}>‎</button>
                    <button className="TwoSeat" id="TwoSeat1" onClick={Clicked}>‎</button>
                    <button className="TwoSeat" id="TwoSeat2" onClick={Clicked}>‎</button>
                    <button className="FiveSeat" id="FiveSeat1" onClick={Clicked}>‎</button>
                    <button className="FiveSeat" id="FiveSeat2" onClick={Clicked}>‎</button>
                    <button className="EightSeat" id="EightSeat1" onClick={Clicked}>‎</button>
                    <button className="ThreeSeat" id="ThreeSeat1" onClick={Clicked}>‎</button>
                    <button className="ThreeSeat" id="ThreeSeat2" onClick={Clicked}>‎</button>
                    <button className="ThreeSeat" id="ThreeSeat3" onClick={Clicked}>‎</button>
                    <button className="ThreeSeat" id="ThreeSeat4" onClick={Clicked}>‎</button>
                    <button className="ThreeSeat" id="ThreeSeat5" onClick={Clicked}>‎</button>
                    </Link>
                </div>
                <br/><br/><br/><br/><br/>
                <p id="FourTablePointer">Four Seat(s) Table ---------</p>
                <p id="TwoTablePointer">Two Seat(s) Table -------</p>
                <p id="TwoTablePointerLines">----------------------</p>
                <p id="TwoTablePointerArrow">^</p>
                <p id="BarPointer">Bar -------</p>
                <p id="BarPointerLines">-----------</p>                
                <p id="FiveTablePointer">----Five Seat(s) Table</p>
                <p id="FiveTablePointerLines">-------------------</p>
                <p id="EightTablePointer">----Eight Seat(s) Table</p>
                <p id="EightTablePointerLines">-------------------</p>
                <p id="ThreeTablePointer">----Three Seat(s) Table</p>
                <p id="ThreeTablePointerLines">---</p>
            </div>
            <Footer />
        </div>
    )
}

export default BookATable;