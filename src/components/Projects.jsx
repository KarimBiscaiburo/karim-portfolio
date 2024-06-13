import "../styles/projects.css";

import landingPages from "../img/landing-pages.png";
import bienesRaices from "../img/bienes-raices.png";
import htmlLogo from "../img/html-logo.png";
import cssLogo from "../img/css-logo.png";
import sassLogo from "../img/sass-logo.png";
import reactLogo from "../img/reactjs-logo.png";
import mysqlLogo from "../img/mysql-logo.png";
import nodeLogo from "../img/nodejs-logo.png";
import javascriptLogo from "../img/javascript-logo.png";

export default function Projects() {

    return (
        <section className="section-projects" id="projects">
            <div className="projects-title">
                <h2>Projects</h2>
                <div></div>
            </div>

            <div className="project-card">
                <div className="project-card_details">
                    <h3>Landing Page Designs</h3>
                    <p>Create templates in order to put my knowledge into practice and experiment with new ways of doing things by developing possible templates that can be put to real use.</p>
                    <div className="project-card-logos">
                        <img src={htmlLogo} alt="html-logo" />
                        <img src={cssLogo} alt="css-logo" />
                    </div>
                </div>
                <div className="project-card_image">
                    <img src={landingPages} alt="landin-pages" />
                </div>
            </div>

            <div className="project-card">
                <div className="project-card_details">
                    <h3>Real Estate</h3>
                    <p>A website with an administrative panel for managing properties for sale. A project made from one of the courses but adapted to other technologies to add more difficulty.</p>
                    <div className="project-card-logos">
                        <img src={reactLogo} alt="reacjs-logo" />
                        <img src={mysqlLogo} alt="mysql-logo" />
                        <img src={sassLogo} alt="sass-logo" />
                        <img src={nodeLogo} alt="nodejs-logo" />
                        <img src={javascriptLogo} alt="javascript-logo" />
                    </div>
                </div>
                <div className="project-card_image">
                    <img src={bienesRaices} alt="bienes-raices" />
                </div>
            </div>
        </section>
    )
}