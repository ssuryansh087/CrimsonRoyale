import React from 'react';
import { useState } from 'react';
import emailjs from "emailjs-com";
import '../styles/ComplaintPage.css';
import logoo from '../components/assets/Logo2.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ComplaintPage = () => {
    const [showModal, setShowModal] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_2pyvb74', 'template_suxavev', e.target, 'kJvLFwNwr0b-DCRNg')
            .then(res => {
                console.log("Initial email sent!", res);
                setShowModal(true);
                setTimeout(() => setShowModal(false), 3000);
                
                const userEmail = e.target.useremail.value;
                const confirmationEmailParams = {
                    reply_to: userEmail,
                    to_name: e.target.name.value,
                    message: "Thank you for contacting us! We will get back to you soon."
                };

                return emailjs.send('service_uqzjpsz', 'template_uvmk8xm', confirmationEmailParams, 'kJvLFwNwr0b-DCRNg');
            })
            .then(confirmationRes => {
                console.log("Confirmation email sent!", confirmationRes);
                alert("Complaint has been sent successfully!");
            })
            .catch(err => {
                console.error("Failed to send email", err);
                alert('Failed to send email. Please try again.');
            });
    }


    return (
        <div>
        <Navbar/>
        <div class="complaintContainer">
        <div class="contact-form-container">
            <img id="rest"src={logoo} alt='Crimson Royale'></img>
            <h1>Contact Form</h1>
            <form onSubmit={sendEmail}>

                <div class="form-group">
                    <label for="name" style={{textDecoration: "none"}}>First Name</label>
                    <input type="text" name="name" class="form-control" />
                </div>
                
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lname" class="form-control" />
                </div>
    
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" name="useremail" class="form-control" />
                </div>
    
                <div class="form-group">
                    <label>Phone</label>
                    <input type="tel" name="namenum" class="form-control" />
                </div>
    
                <div class="form-group">
                    <label>Message</label>
                    <textarea name="message" rows="4" class="form-control"></textarea>
                </div>
    
                <button type="submit" class="submit-button">Send</button>
            </form>
        </div>
    </div>
    {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close-button" onClick={() => setShowModal(false)}>&times;</span>
                            <p>Email Sent!</p>
                        </div>
                    </div>
                )}

    <Footer />
    </div>
    );
};

export default ComplaintPage;