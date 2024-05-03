import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/AdminBooking.css';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Layout from '../components/assets/Layout.png';
import firebase from '../database/firebaseConfig';
import 'firebase/compat/firestore';
import { db } from '../database/firestoreDatabase.js';
import { collection, doc, getDoc } from 'firebase/firestore';
//import QRCode from "react-qr-code";

function AdminBooking(){
    const [startDate, setStartDate] = useState(new Date());
    var colorData;
    let buttonID;
    let AvailFlag = 0;
    
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
                                console.log('red');
                                buttons0[i].style.backgroundColor = 'red';
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
                alert("Data Initialized Successfully!");
            }
            catch (error){
                alert(error.message);
            }
        }
    }

    function Clicked(e){
        buttonID = e.target.id;
        const submitButton = document.getElementById("AdminTableSubmit");
        const reservedButton = document.getElementById("ReservedButton");
        const availableButton = document.getElementById("AvailableButton");
        const timeDivision = document.getElementById("TimeSelectMenus");

        reservedButton.style.pointerEvents = 'all';
        reservedButton.style.backgroundColor = 'red';
        availableButton.style.pointerEvents = 'all';
        availableButton.style.backgroundColor = 'seagreen';
        submitButton.style.pointerEvents = 'none';
        timeDivision.style.pointerEvents = 'all';
        timeDivision.style.boxShadow = '0px 10px 30px seagreen';

        const dialog = document.getElementById("mainDialog");
        dialog.showModal(); 
    }


    const myFunction = async(e) => {
        e.preventDefault();

        const currentDateString = startDate.toString();
        const currentDateArray = currentDateString.split(" ");
        const currentDate = currentDateArray[1] + currentDateArray[2] + currentDateArray[3];
        alert(currentDate);

        const currentButton = document.getElementById(buttonID);

        var HourSelect1 = document.querySelector('#HourSelect1');
        var HourSelected1 = HourSelect1.value;

        var MinuteSelect1 = document.querySelector('#MinuteSelect1');
        var MinuteSelected1 = MinuteSelect1.value;

        var AMPMSelect1 = document.querySelector('#AMPMSelect1');
        var AMPMSelected1 = AMPMSelect1.value;

        const startTime = HourSelected1 + MinuteSelected1 + AMPMSelected1;

        var HourSelect2 = document.querySelector('#HourSelect2');
        var HourSelected2 = HourSelect2.value;

        var MinuteSelect2 = document.querySelector('#MinuteSelect2');
        var MinuteSelected2 = MinuteSelect2.value;

        var AMPMSelect2 = document.querySelector('#AMPMSelect2');
        var AMPMSelected2 = AMPMSelect2.value;

        const endTime = HourSelected2 + MinuteSelected2 + AMPMSelected2;

        const TotalTime = startTime + endTime;

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

        if(colorData !== undefined){
            
            for(let i = 0; i < buttons0.length; i++){
                if(buttons0[i] === currentButton){
                    if(AvailFlag === 1){
                        TwoSeatTime.push('AVAILABLE');
                    }
                    else{
                        TwoSeatTime.push(TotalTime);
                    }
                }
                else if(colorData.TwoSeatTime[i] !== undefined){
                    TwoSeatTime.push(colorData.TwoSeatTime[i]);
                }
                else{
                    TwoSeatTime.push('AVAILABLE');
                }
            }

            for(let i = 0; i < buttons1.length; i++){
                if(buttons1[i] === currentButton){
                    if(AvailFlag === 1){
                        ThreeSeatTime.push('AVAILABLE');
                    }
                    else{
                        ThreeSeatTime.push(TotalTime);
                    }
                }
                else if(colorData.ThreeSeatTime[i] !== undefined){
                    ThreeSeatTime.push(colorData.ThreeSeatTime[i]);
                }
                else{
                    ThreeSeatTime('AVAILABLE');
                }
            }

            for(let i = 0; i < buttons2.length; i++){
                if(buttons2[i] === currentButton){
                    if(AvailFlag === 1){
                        FourSeatTime.push('AVAILABLE');
                    }
                    else{
                        FourSeatTime.push(TotalTime);
                    }
                }
                else if(colorData.FourSeatTime[i] !== undefined){
                    FourSeatTime.push(colorData.FourSeatTime[i]);
                }
                else{
                    FourSeatTime.push('AVAILABLE');
                }
            }

            for(let i = 0; i < buttons3.length; i++){
                if(buttons3[i] === currentButton){
                    if(AvailFlag === 1){
                        FiveSeatTime.push('AVAILABLE');
                    }

                    else{
                        FiveSeatTime.push(TotalTime);
                    }
                }
                else if(colorData.FiveSeatTime[i] !== undefined){
                    FiveSeatTime.push(colorData.FiveSeatTime[i]);
                }
                else{
                    FiveSeatTime.push('AVAILABLE');
                }
            }

            for(let i = 0; i < buttons4.length; i++){
                if(buttons4[i] === currentButton){
                    if(AvailFlag === 1){
                        EightSeatTime.push('AVAILABLE');
                    }
                    else{
                        EightSeatTime.push(TotalTime);
                    }
                }
                else if(colorData.EightSeatTime[i] !== undefined){
                    EightSeatTime.push(colorData.EightSeatTime[i]);
                }
                else{
                    EightSeatTime.push('AVAILABLE');
                }
            }
        }
        else{
            alert("Database Error!");
        }
        try{
            await firebase.firestore().collection('Tables').doc(currentDate).set({
                TwoSeatTime,
                ThreeSeatTime,
                FourSeatTime,
                FiveSeatTime,
                EightSeatTime
            });
            alert("Data Saved Successfully!");
            getData(currentDate);
            dialogClose();
        }
        catch (error){
            alert(error.message);
        }
    }

    const currentDateString = startDate.toString();
    const currentDateArray = currentDateString.split(" ");
    const currentDate = currentDateArray[1] + currentDateArray[2] + currentDateArray[3];
    getData(currentDate);


    function dialogClose(){
        const dialog = document.getElementById("mainDialog");
        dialog.close(); 
    }

    function AvailableFunc(e){
        const availButtonID = e.target.id;
        const availButton = document.getElementById(availButtonID);
        const reservedButton = document.getElementById("ReservedButton");
        const timeDivision = document.getElementById("TimeSelectMenus");
        const submitButton = document.getElementById("AdminTableSubmit");

        if(window.getComputedStyle(availButton).backgroundColor === 'rgb(46, 139, 87)' && window.getComputedStyle(reservedButton).backgroundColor !== 'rgb(218, 165, 32)'){
            availButton.style.backgroundColor = 'goldenrod';
            availButton.style.color = 'black';
            timeDivision.style.pointerEvents = 'none';
            timeDivision.style.boxShadow = '0px 10px 30px red'
            AvailFlag = 1;
            submitButton.style.pointerEvents = 'all';
        }
        else{
            availButton.style.backgroundColor = 'seagreen';
            availButton.style.color = '#f4f2f3';
            timeDivision.style.pointerEvents = 'all';
            timeDivision.style.boxShadow = '0px 10px 30px seagreen';
            AvailFlag = 0;
        }
    }

    function ReservedFunc(e){
        const availButtonID = e.target.id;
        const availButton = document.getElementById(availButtonID);
        const reservedButton = document.getElementById("AvailableButton");
        const submitButton = document.getElementById("AdminTableSubmit");

        if(window.getComputedStyle(availButton).backgroundColor === 'rgb(255, 0, 0)' && window.getComputedStyle(reservedButton).backgroundColor !== 'rgb(218, 165, 32)'){
            availButton.style.backgroundColor = 'goldenrod';
            availButton.style.color = 'black';
            submitButton.style.pointerEvents = 'all';
        }
        else{
            availButton.style.backgroundColor = 'red';
            availButton.style.color = '#f4f2f3';
            submitButton.style.pointerEvents = 'none';
        }
    }

    return(
        <div>
            <Navbar />
            <form onSubmit={myFunction}>
            <div id="BookingContainer">
            <br/>
                <div style={{marginLeft: "37%"}}> 
                <p id="BookingDatep">Booking Date : <DatePicker id="DatePicker1" selected={startDate} onChange={(date) => dynamicDate(date)} /></p>
                </div>
                <br/><br/>
                <div id="BookingLayout">
                    <img src={Layout} alt="Restaurant Layout" id="LayoutImage"/>
                    <button type="button" className="FourSeat" id="FourSeat1" onClick={(e) => Clicked(e)}>‎</button>
                    <button type="button" className="FourSeat" id="FourSeat2" onClick={(e) => Clicked(e)}>‎</button>
                    <button type="button" className="FourSeat" id="FourSeat3" onClick={(e) => Clicked(e)}>‎</button>
                    <button type="button" className="FourSeat" id="FourSeat4" onClick={(e) => Clicked(e)}>‎</button>
                    <button type="button" className="FourSeat" id="FourSeat5" onClick={(e) => Clicked(e)}>‎</button>
                    <button type="button" className="FourSeat" id="FourSeat6" onClick={(e) => Clicked(e)}>‎</button>
                    <button type="button" className="TwoSeat" id="TwoSeat1" onClick={(e) => Clicked(e)}>‎</button>
                    <button type="button" className="TwoSeat" id="TwoSeat2" onClick={(e) => Clicked(e)}>‎</button>
                    <button type="button" className="FiveSeat" id="FiveSeat1" onClick={(e) => Clicked(e)}>‎</button>
                    <button type="button" className="FiveSeat" id="FiveSeat2" onClick={(e) => Clicked(e)}>‎</button>
                    <button type="button" className="EightSeat" id="EightSeat1" onClick={(e) => Clicked(e)}>‎</button>
                    <button type="button" className="ThreeSeat" id="ThreeSeat1" onClick={(e) => Clicked(e)}>‎</button>
                    <button type="button" className="ThreeSeat" id="ThreeSeat2" onClick={(e) => Clicked(e)}>‎</button>
                    <button type="button" className="ThreeSeat" id="ThreeSeat3" onClick={(e) => Clicked(e)}>‎</button>
                    <button type="button" className="ThreeSeat" id="ThreeSeat4" onClick={(e) => Clicked(e)}>‎</button>
                    <button type="button" className="ThreeSeat" id="ThreeSeat5" onClick={(e) => Clicked(e)}>‎</button>
                </div>
                <br/><br/>
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
            
            <br/><br/><br/>
            </div>
            <dialog id="mainDialog">
                <br/>
                <button type="button" onClick={dialogClose} id="DialogCloseButton">Close</button>
                <br/><br/>
                <button type="button" id="AvailableButton" onClick={(e) => AvailableFunc(e)}>Available</button>
                <button type="button" id="ReservedButton" onClick={(e) => ReservedFunc(e)}>Reserved</button>
                <div id="TimeSelectMenus">
                    <div id="TimeStarting">
                        <select id="HourSelect1" className="allSelects">
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <select id="MinuteSelect1" className="allSelects">
                            <option value="00">00</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="45">45</option>
                        </select>
                        <select id="AMPMSelect1" className="allSelects">
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
                    <p style={{fontSize: "50px", margin: "0"}}>TO</p>
                    <div id="TimeEnding">
                        <select id="HourSelect2" className="allSelects">
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <select id="MinuteSelect2" className="allSelects">
                            <option value="00">00</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="45">45</option>
                        </select>
                        <select id="AMPMSelect2" className="allSelects">
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
                </div>
                <button type="submit" id="AdminTableSubmit">Submit</button>
            </dialog>
            </form>
            <Footer />
        </div>
    )
}

export default AdminBooking;