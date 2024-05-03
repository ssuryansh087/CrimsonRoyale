import React from 'react';
import { Link } from 'react-router-dom'

function ComplaintForm(){
    return(
        <div id='thirdMusk'>
          <h2 id='ContactUs'>Need Some Help?</h2>
          <hr/>
          <p className='Creators1'>Prerna Samtani - 2203143</p>
          <p className='Creators1'>Suryansh Saxena - 2203146</p>
          <p className='Creators1'>Zeeshan Hyder - 2203147</p>
          <hr/>
          <p id='RegisterAComplaint'>Register A Complaint</p>
          <Link to="/ComplaintPage"><button id='ContactUsButton'>Contact Us</button></Link>
        </div>
    )
}

export default ComplaintForm;