import "../styles/projects.css";

import landingPages from "../img/landing-pages.png";

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
                </div>
                <div className="project-card_image">
                    <img src={landingPages} alt="landin-pages" />
                </div>
            </div>
        </section>
    )
}