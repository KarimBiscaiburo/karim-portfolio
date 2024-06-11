import "../styles/nav.css";

// IMG
import personIcon from "../img/person-icon.png";
import personFilledIcon from "../img/person-filled-icon.png";
import workIcon from "../img/work-icon.png";
import workFilledIcon from "../img/work-filled-icon.png";
import folderIcon from "../img/folder-icon.png";
import folderFilledIcon from "../img/folder-filled-icon.png";
import schoolIcon from "../img/school-icon.png";
import schoolFilledIcon from "../img/school-filled-icon.png";
import mailIcon from "../img/mail-icon.png";
import mailFilledIcon from "../img/mail-filled-icon.png";
import settingsIcon from "../img/settings-icon.png";

export default function Nav() {

    return ( 
        <>
            <header className="header">
                <nav className="nav">
                    <ul className="nav_list">
                        <li className="nav_list-item">
                            <a href="#about"><img src={personIcon} alt="person-icon" /></a>
                        </li>
                        <li className="nav_list-item">
                            <a href="#experience    "><img src={workIcon} alt="work-icon" /></a>
                        </li>
                        <li className="nav_list-item">
                            <a href="#"><img src={folderIcon} alt="folder-icon" /></a>
                        </li>
                        <li className="nav_list-item">
                            <a href="#"><img src={schoolIcon} alt="school-icon" /></a>
                        </li>
                        <li className="nav_list-item">
                            <a href="#"><img src={mailIcon} alt="mail-icon" /></a>
                        </li>
                    </ul>
                </nav>
                <div className="settings">
                    <button>
                        <img src={settingsIcon} alt="settings-icon" />
                    </button>
                </div>
            </header>
        </>
    )
}