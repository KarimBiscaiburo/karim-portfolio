import "../styles/frontpage.css";


//IMG
import meImage from "../img/me-without-background.webp";
import dataObjectIcon from "../img/data-object-icon.png";
import personalDevelopmentIcon from "../img/personal-development-icon.png";
import walletIcon from "../img/wallet-icon.png";
import bankIcon from "../img/bank-icon.png";
import linkedinLogo from "../img/linkedin-logo.png";
import githubLogo from "../img/github-logo.png";
import downloadIcon from "../img/download-icon.png";

//PDF
import CV from "../img/cv-karim-biscaiburo.pdf";

export default function FrontPage() {


    return (
        <>
            <div className="frontpage">
                <div className="frontpage-introduction">
                    <h1>Karim Biscaiburo</h1>
                    <h2><span>Full Stack</span> Developer</h2>
                    <h3>Focused on Front-End</h3>

                    <div className="frontpage-complements">
                        <div className="slogan">
                            <p>Developing solutions and making them real</p>
                        </div>
                        <div className="years-development">
                            <p><span>+3</span></p>
                            <p>Years Development</p>
                        </div>
                        <div className="web-development">
                            <p>Web Development</p>
                            <img src={dataObjectIcon} alt="data-object-icon" />
                        </div>
                        <div className="personal-development">
                            <p>Personal Develpment</p>
                            <img src={personalDevelopmentIcon} alt="personal-development-icon" />
                        </div>
                        <div className="personal-finance">
                            <p>Personal Finance</p>
                            <img src={walletIcon} alt="wallet-icon" />
                        </div>
                        <div className="economy">
                            <p>Economy</p>
                            <img src={bankIcon} alt="bank-icon" />
                        </div>
                    </div>
                    <div className="frontpage-links">
                        <a href="https://www.linkedin.com/in/karim-biscaiburo/" target="blank">
                            <p>Linkedin</p>
                            <img src={linkedinLogo} alt="linkedin-logo" />
                        </a>
                        <a href="https://github.com/KarimBiscaiburo" target="blank">
                            <p>Github</p>
                            <img src={githubLogo} alt="github-logo" />
                        </a>
                        <a href={CV} target="blank">
                            <p>Resume</p>
                            <img src={downloadIcon} alt="download-icon" />
                        </a>
                    </div>
                </div>
                <div className="image-me">
                    <img src={meImage} alt="me-image" />
                </div>
            </div>
            <span className="divisor"></span>
        </>
    )
}