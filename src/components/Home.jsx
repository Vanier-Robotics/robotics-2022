import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Home.css';
import { withNamespaces } from "react-i18next";
import i18n from '../i18n';

function hide() {
    document.getElementById('Dark').classList.add('hide');
    document.getElementById('Light').classList.add('show');
    document.getElementById('Dark').classList.remove('show');
    document.getElementById('Light').classList.remove('hide');
}
function show() {
    document.getElementById('Dark').classList.add('show');
    document.getElementById('Light').classList.add('hide');
    document.getElementById('Dark').classList.remove('hide');
    document.getElementById('Light').classList.remove('show');
}

function Home(props) {
    const [lang, setLang] = useState(false);
    
    const toEn = () => {
        setLang(true);
        i18n.changeLanguage('en');
    }
    const toFr = () => {
        setLang(false);
        i18n.changeLanguage('fr');
    }
    
    return (
        <>
            <img id="Dark" className="BG show" alt="Dark BG here" src={require("../assets/media/images/landing.png")}/>
            <img id="Light" className="BG hide" alt="Light BG here" src={require("../assets/media/images/pinklanding.png")}/>
            <div className="container" >
                <div className="row1" >
                    <Link onMouseOver={hide} onMouseOut={show} onClick={toEn} to="/menu">
                        <img className="cake" alt="English" src={require("../assets/media/images/en.png")} />
                        <img className="cake" alt="Cake here" src={require("../assets/media/images/cookie.png")} />
                        
                    </Link>
                </div>
                <div className="row2" >
                    <img className="title" alt="title here" src={require("../assets/media/images/title1.png")}/>
                </div>
                <div className="row3" >
                    <Link onMouseOver={hide} onMouseOut={show} onClick={toFr} to="/menu">
                        <img className="vial" alt="Vial here" src={require("../assets/media/images/bottle.png")}/>
                        <img className="vial" alt="French" src={require("../assets/media/images/fr.png")} />
                    </Link>
                </div>
                
            </div>

        </>
        
    );
}
export default withNamespaces()(Home);

// useEffect(() => {
// 	if(someStateYouExpectToChangeToTriggerTheBackgroundChange === 'what you expect it to be to trigger the bg change') {
// 		document.body.style.backgroundImage = 'url(path/img.png)' // double check my quotes
// 	}
// }, [someStateYouExpectToChangeToTriggerTheBackgroundChange])