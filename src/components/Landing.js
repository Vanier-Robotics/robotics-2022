import React from "react";
import { Link } from "react-router-dom";
import './Landing.css';
import { withNamespaces } from "react-i18next";

function Landing({t}) {
    
    return (
        <>
            {/* <div className="LandingDark"></div>
            <div className="Landing">
                <Link to="/transition">
                    <span className="en">ENGLISH</span>
                    <img className="cake" alt="Cake here" src={require("../assets/media/images/cookie.png")} />
                    
                </Link>

                <a href="https://www.alice-in-wonderland.net/" target="_blank" rel="noreferrer" >
                    <img className="title" alt="title here" src={require("../assets/media/images/title1.png")}/>
                </a>

                <Link to="/transition">
                    <img className="vial" alt="vial here" src={require("../assets/media/images/bottle.png")}/>
                    <span className="fr">FRANÇAIS</span>
                </Link>
            </div> */}
            <img className="BGDark" alt="Dark BG here" src={require("../assets/media/images/landing.png")}/>
            <img className="BGLight" alt="Light BG here" src={require("../assets/media/images/pinklanding.png")}/>
            <div className="container" >
                <div className="row1" >
                    <Link to="/transition">
                        {/* <span className="en">ENGLISH</span> */}
                        <img className="cake" alt="Cake here" src={require("../assets/media/images/en.png")} />
                        <img className="cake" alt="Cake here" src={require("../assets/media/images/cookie.png")} />
                        
                    </Link>
                </div>
                <div className="row2" >
                    <a href="https://www.alice-in-wonderland.net/" target="_blank" rel="noreferrer" >
                        <img className="title" alt="title here" src={require("../assets/media/images/title1.png")}/>
                    </a>
                </div>
                <div className="row3" >
                    <Link to="/transition">
                        <img className="vial" alt="Vial here" src={require("../assets/media/images/bottle.png")}/>
                        {/* <span className="fr">FRANÇAIS</span> */}
                        <img className="vial" alt="Vial here" src={require("../assets/media/images/fr.png")} />
                    </Link>
                </div>
                
            </div>

        </>
        
    );
}
export default withNamespaces()(Landing);

// useEffect(() => {
// 	if(someStateYouExpectToChangeToTriggerTheBackgroundChange === 'what you expect it to be to trigger the bg change') {
// 		document.body.style.backgroundImage = 'url(path/img.png)' // double check my quotes
// 	}
// }, [someStateYouExpectToChangeToTriggerTheBackgroundChange])