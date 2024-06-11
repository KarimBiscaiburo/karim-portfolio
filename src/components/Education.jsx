import "../styles/education.css";

import cLogo from "../img/c-logo.png";
import cssLogo from "../img/css-logo.png";
import htmlLogo from "../img/html-logo.png";
import javascriptLogo from "../img/javascript-logo.png";
import nextjsLogo from "../img/nextjs-logo.png";
import nodeLogo from "../img/nodejs-logo.png";
import mysqlLogo from "../img/mysql-logo.png";
import reactLogo from "../img/reactjs-logo.png";
import phpLogo from "../img/php-logo.png";

export default function Education() {


    return (
        <section className="section-education" id="education">
            <h2>Education</h2>
            <div className="education-cards">
                <div className="education-card">
                    <div className="education-card_text">
                        <h3>UTN</h3>
                        <a href="https://mdp.utn.edu.ar/tecnicatura/tecnico_universitario_en_programacion/" target="blank">Tecnicatura en Programación</a>
                        <p>University technical degree where I learned the basic concepts of programming. I started programming in C, using algorithms and using logic.</p>
                    </div>
                    <div className="education-card_details">
                        <div className="details-logos">
                            <img src={cLogo} alt="c-logo" />
                        </div>
                        <p>03/2021 - 10/2021</p>
                    </div>
                </div>

                <div className="education-card">
                    <div className="education-card_text">
                        <h3>Udemy</h3>
                        <a href="https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/learn/lecture/24488498?start=0" target="blank">Desarrollo Web Completo</a>
                        <p>Full Stack course with projects to develop a complete application and know how to connect the Front End with the Back End</p>
                    </div>
                    <div className="details-logos">
                        <img src={htmlLogo} alt="html-logo"/>
                        <img src={cssLogo} alt="css-logo"/>
                        <img src={javascriptLogo} alt="javascript-logo"/>
                        <img src={mysqlLogo} alt="mysql-logo"/>
                        <img src={phpLogo} alt="php-logo"/>
                    </div>
                </div>

                <div className="education-card">
                    <div className="education-card_text">
                        <h3>Udemy</h3>
                        <a href="https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/learn/lecture/21854582?start=15#overview" target="blank">JavaScript Moderno</a>
                        <p>Complete course on the language. From the basics to the most advanced concepts.</p>
                    </div>
                    <div className="details-logos">
                        <img src={javascriptLogo} alt="javascript-logo" />
                    </div>
                </div>

                <div className="education-card">
                    <div className="education-card_text">
                        <h3>Online courses</h3>
                        <h4>Variety of Technologies</h4>
                        <p>I have taken, and continue to take, online courses from mentors with experience in the sector in order to learn new things or reinforce my knowledge.</p>
                    </div>
                    <div className="details-logos">
                        <img src={cssLogo} alt="css-logo" />
                        <img src={nodeLogo} alt="nodejs-logo" />
                        <img src={javascriptLogo} alt="javascript-logo" />
                        <img src={reactLogo} alt="reactjs-logo" />
                        <img src={nextjsLogo} alt="nextjs-logo" />
                    </div>
                </div>
            </div>
        
        </section>
    )
}