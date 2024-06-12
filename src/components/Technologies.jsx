import "../styles/technologies.css";

//IMG
import reactLogo from "../img/reactjs-logo.png";
import nextLogo from "../img/nextjs-logo.png";
import cssLogo from "../img/css-logo.png";
import htmlLogo from "../img/html-logo.png";
import sassLogo from "../img/sass-logo.png";
import mysqlLogo from "../img/mysql-logo.png";
import nodeLogo from "../img/nodejs-logo.png";
import javascriptLogo from "../img/javascript-logo.png";

export default function Technologies() {

    return (
        <section className="technologies-section">
            <h2>Technologies I have worked with</h2>
            <div className="technologies-container">
                <img src={cssLogo} alt="css-logo" />
                <img src={htmlLogo} alt="html-logo" />
                <img src={nodeLogo} alt="nodejs-logo" />
                <img src={nextLogo} alt="nextjs-logo" />
                <img src={javascriptLogo} alt="javascript-logo" />
                <img src={mysqlLogo} alt="mysql-logo" />   
                <img src={reactLogo} alt="react-logo" />
                <img src={sassLogo} alt="sass-logo" />
            </div>
        </section>
    )
}