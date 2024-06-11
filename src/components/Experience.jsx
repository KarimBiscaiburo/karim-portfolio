import { useState } from "react";
import "../styles/experience.css";


//IMG
import reactLogo from "../img/reactjs-logo.png";
import cssLogo from "../img/css-logo.png";
import javascriptLogo from "../img/javascript-logo.png";
import nextjsLogo from "../img/nextjs-logo.png";
import sassLogo from "../img/sass-logo.png";
import mysqlLogo from "../img/mysql-logo.png";
// import leftArrow from  "../img/arrow-left-icon.png";
// import rightArrow from  "../img/arrow-right-icon.png";
import chemvalPage from "../img/chemval-page.png";
import peluqueriaPage from "../img/peluqueria-page.png";

export default function Experience() {
    const [firstCardActive, setFirstCardActive] = useState(false);
    const [secondCardActive, setSecondCardActive] = useState(false);
    // const [experienceActive, setExperienceActive] = useState(0);

    // const cardsCount = [0, 1];
    const classFirstCard = firstCardActive ? "card active" : "card";
    const classSecondCard = secondCardActive ? "card active" : "card";

    // Toggle show more details in experience card
    function handleFirstCardExperience() {
        setFirstCardActive(!firstCardActive);
    }
    function handleSecondCardExperience() {
        setSecondCardActive(!secondCardActive);
    }

    // Toggle card experience to renderize
    // function handleExperienceActive() {
    //     if(experienceActive === 0) setExperienceActive(1);
    //     else setExperienceActive(0);
    // }

    return (

        <main className="experience-section" id="experience">
            <div className="title-separator">
                <div></div>
                <h2>Experience</h2>
            </div>
            <div className="experience-cards">
                <div className={classFirstCard}>
                    <div className="card-container_img">
                        <a href="https://chemval.com.ar/" target="blank">
                            <img src={chemvalPage} alt="chemval-page" />
                        </a>
                    </div>
                    <div className="card-resume">
                        <h3>Web Design of a Chemistry</h3>
                        <p>Create a page for a company in order to give visibility to your services and get potential clients</p>
                        <p>01/2024 - 03/2024</p>
                    </div>
                    <div className="card-description">
                        <p>Includes database connection to update products and features.</p>
                        <p>Deployment to production and server administration.</p>
                        <p>Professional emails and shipments through the page.</p>
                        <p>Design made in Figma to work on the idea.</p>
                        <p>SEO for website positioning in the Google search engine.</p>
                        <div className="card-description_tech">
                            <img src={reactLogo} alt="reactjs-logo" />
                            <img src={cssLogo} alt="css-logo" />
                            <img src={javascriptLogo} alt="javascript-logo" />
                        </div>
                    </div>
                    <button 
                        className="experience-see-more"
                        onClick={handleFirstCardExperience}
                    >
                        {firstCardActive ? "See Less" : "See More"}
                    </button>
                </div>
                <div className={classSecondCard}>
                    <div className="card-container_img">
                        <div>
                            <img src={peluqueriaPage} alt="chemval-page" />
                        </div>
                    </div>
                    <div className="card-resume">
                        <h3>Page for a Hairdresser</h3>
                        <p>Website made so that clients can request appointments automatically and have an administrative panel to manage it</p>
                        <p>05/2023 - 08/2023</p>
                    </div>
                    <div className="card-description">
                        <p>This page has a panel with an administrative view, with the shifts you have, with the possibility of scheduling and rescheduling new or existing shifts, communicating directly with the user through emails, and on the other hand it has a client view, with a place to see your data, the services of the professional, the available schedules, etc.</p>
                        <p>I created all the design, front end and back end from scratch and at my own expense.</p>
                        <div className="card-description_tech">
                            <img src={nextjsLogo} alt="nextjs-logo" />
                            <img src={sassLogo} alt="scss-logo" />
                            <img src={javascriptLogo} alt="javascript-logo" />
                            <img src={mysqlLogo} alt="mysql-logo" />
                        </div>
                    </div>
                    <button 
                        className="experience-see-more"
                        onClick={handleSecondCardExperience}
                    >
                        {secondCardActive ? "See Less" : "See More"}
                    </button>
                </div>
            </div>

            {
            /* ESTOS SON LOS BOTONES PARA HACER EL SLIDER */

            /* <div className="slider-buttons">
                <img src={leftArrow} alt="left-arrow" onClick={handleExperienceActive}/>
                {
                    cardsCount.map(index => (
                        <span 
                            key={index}
                            className={experienceActive === index ?  "active" : null}
                            ></span>
                    ))
                }
                <img src={rightArrow} alt="right-arrow" onClick={handleExperienceActive}/>
            </div> */
            }
        </main>
    )
}