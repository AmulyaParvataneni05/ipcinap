import React from 'react';
import OfficQR from "../../../Photos/Location QR.png";
import OfferingQR from "../../../Photos/Offering_QR.jpg";
import './ContactUs.css';
function ContactUs(){
  return (
    <div>
      <h1 className="contactus-heading">Contact Us</h1>
      <div className="contact-info">
        <div className="contactus-sub">
          <div>
            <p className='contact-data'><strong>Address:</strong><br />
              48-12-12 Zion Bible College,<br />
              Eluru Road, Gunadala,<br />
              Vijayawada - 520004,<br />
              Andhra Pradesh, India
            </p>
            <p className='contact-data'><strong>Phone:</strong> (+91) 98481 10020 <br />
              <strong>Email:</strong> <a className='contact-link' href="mailto:gunadalaipc@gmail.com">gunadalaipc@gmail.com</a> <br />
              <strong>Facebook:</strong> <a className='contact-link' href="https://www.facebook.com/share/HiXgf4zGzkxrvewB/?mibextid=LQQJ4d">Join us</a>
            </p>
            <div>
              <h4 className="subheading-contact">Office Hours</h4>
              <p className='contact-data'>
                Monday to Friday: 9:00 AM - 5:00 PM <br/>
                Saturday: 10:00 AM - 2:00 PM <br />
                Sunday: Closed
              </p>
            </div>
            <p className='contact-data'><strong>For Prayer Requests:</strong> (+91) 7799716767</p>
            <div>
              <p className='contact-data'>
              <a className='contact-link' href="https://docs.google.com/forms/d/e/1FAIpQLSdT98cmmTrE6nJL4s6SbvCnswo-KltwEIuFr6bK5YJxn7d87w/viewform?embedded=true" target="_blank" rel="noopener noreferrer">Submit a Prayer Request</a>
              </p>
            </div>
          </div>
          <div className="Qrs">
            <div className="sub2">
              <h5 className="subheading-contact">Our Office</h5>
              <img src={OfficQR} alt="Location QR" className="qrimg" />
            </div>
            <div className="sub21">
              <h5 className="subheading-contact">To Offer</h5>
              <img src={OfferingQR}alt="Offering QR" className="qrimg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
