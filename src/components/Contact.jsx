import "../styles/contact.css";

import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [loader, setLoader] = useState(false);

    //GET .ENV VARIABLES
    const public_key = import.meta.env.VITE_PUBLIC_KEY;
    const service_id = import.meta.env.VITE_SERVICE_ID;
    const template_id = import.meta.env.VITE_TEMPLATE_ID;

    //SEND EMAIL FUNCTION
    function handleSubmit(e) {
        e.preventDefault();

        setLoader(true);

        //GET DATA FROM INPUTS
        const data = Object.fromEntries(new FormData(e.target));

        const message = {
            from_name: data.email,
            subject: data.subject,
            message: data.message
        }

        //SEND EMAIL
        emailjs.send(service_id, template_id, message, {publicKey: public_key})
            .then(res => {
                console.log(res.status, res.text);
                setLoader(false);

                //SHOW MESSAGE
                const successMessage = document.querySelector(".success-message")
                successMessage.classList.add("active");

                setTimeout(() => {
                    successMessage.classList.remove("active");
                }, 2000)

            }, err => {
                console.log(err);
            })

        e.target.reset();
    }

    return (

        <footer className="footer-contact" id="contact">
            <form className="contact-form" onSubmit={(e)=> handleSubmit(e)}>
                <input type="email" id="email" name="email" placeholder="Email" required/>
                <input type="text" id="subject" name="subject" placeholder="Subject" required/>
                <textarea name="message" id="message" placeholder="Message" required></textarea>
                {
                    loader ? <span className="loader"></span> : <input type="submit" value="Send"/>
                }
            </form>
            <div className="footer-details">
                <p>I would like to highlight that I firmly believe in constant learning, so I would not like to stop studying/learning new things at any time. This is why I am going to try to take every opportunity to develop myself both professionally and personally.</p>
                <p>Furthermore, I believe that things have to be done giving the best of oneself and thinking about how you would like to receive that job or whatever, that is why I will give everything within my reach as long as it is perfect.</p>
            </div>
        </footer>
    )
}