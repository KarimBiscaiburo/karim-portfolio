import "../styles/contact.css";


export default function Contact() {

    return (

        <footer className="footer-contact" id="contact">
            <form className="contact-form">
                <input type="email" id="email" placeholder="Email"/>
                <input type="text" id="subject" placeholder="Subject"/>
                <textarea name="message" id="message" placeholder="Message"></textarea>
                <input type="submit" value="Send"/>
            </form>
            <div className="footer-details">
                <p>I would like to highlight that I firmly believe in constant learning, so I would not like to stop studying/learning new things at any time. This is why I am going to try to take every opportunity to develop myself both professionally and personally.</p>
                <p>Furthermore, I believe that things have to be done giving the best of oneself and thinking about how you would like to receive that job or whatever, that is why I will give everything within my reach as long as it is perfect.</p>
            </div>
        </footer>
    )
}