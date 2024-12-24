import React from 'react';
import "./Contact.css";
import MSG from "../../../assets/msg-icon.png";
import mail_icon from "../../../assets/mail-icon2.png";
import phone_icon from "../../../assets/phone-icon2.png";
import location_icon from "../../../assets/location-icon2.png";
import timings_icon from "../../../assets/timings.png";
import {Button} from "@mui/material";

const ContactUs = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "replace_with_access_key");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a Message <img src={MSG}/></h3>
                <p>Feel free to reach out through contact form or find our contact information below.
                    Your feedback, questions, and suggestions are important to us as we strive to provide exceptional
                    service to our community</p>
                <ul>
                    <li><img src={mail_icon}/> amit.vishen@vemplusurgentcare.com</li>
                    <li><img src={phone_icon}/>+91-9716467981</li>
                    <li><img src={location_icon}/>73, Ground Floor, Emerald Plaza, 65 Gurgaon</li>
                    <li><img src={timings_icon}/>Monday to Saturday, 8:00 AM - 8:00 PM</li>
                </ul>
            </div>

            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Enter Your Name' required/>
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter Your Mobile Number' required/>
                    <label>Write Your Message Here</label>
                    <textarea name='message' rows='6' placeholder='Enter Your Message' required></textarea>
                    <Button
                        variant="contained"
                        size="large"
                        disableElevation type={'submit'}
                    >
                       Submit
                    </Button>
                </form>
                <span>{result}</span>
            </div>

        </div>
    )
}

export default ContactUs
