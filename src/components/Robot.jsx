import React from "react";
import { withNamespaces } from "react-i18next";
import "./Robot.css";

function Robot(props) {
    return (
        <div id="Robot" className="Robot page contents-page">
            <span className="banner" >
                <h1 className="titleArcanum">{props.t('Robot')}</h1>
            </span>
            <div>
                <p>{props.t('r1')}</p>
            </div>
            <div className="image">
                <img id='staticRabbit' src={require("../assets/media/images/teapot_f.png")} alt="UpRabbit"/>
                <img id='staticRabbit' src={require("../assets/media/images/teapot_f.png")} alt="UpRabbit"/>
            </div>
            <div className="wider">
                <p>{props.t('r2')}</p>{props.t('drivetrain')} <br/> {props.t('input')}<br/>{props.t('reservoir')}<br/>{props.t('output')}
            </div>
            <div>
                <p>{props.t('r3')}</p><p>{props.t('r4')} {props.t('r5')} </p><p> {props.t('r6')}</p>
            </div>
            <div>
                <p>{props.t('r7')}</p>
            </div>
            <div className="embed">
                <iframe 
                    className="robot1"
                    title="Arcanum Playing Field" 
                    src="https://myedu11994.autodesk360.com/shares/public/SH35dfcQT936092f0e43fe83a40a68a54008?mode=embed"
                    allowFullScreen={true} 
                    webkitallowfullscreen="true" 
                    mozallowfullscreen="true" 
                    frameBorder="0">
                </iframe>
            </div>                
            <div>
                <p>{props.t('r8')}</p>
            </div>
            <div>
                <p>{props.t('r9')}</p>
            </div>
            <div className="embed">
                <iframe 
                    className="robot2"
                    title="Arcanum Playing Field" 
                    src="https://myedu11994.autodesk360.com/shares/public/SH35dfcQT936092f0e43b40cceb8ab277f79?mode=embed"
                    allowFullScreen={true} 
                    webkitallowfullscreen="true" 
                    mozallowfullscreen="true" 
                    frameBorder="0">
                </iframe>
            </div>
            <div className="image wider">
                <img id='staticRabbit' width="" src={require("../assets/media/images/teapot_f.png")} alt="UpRabbit"/>
                <img id='staticRabbit' width="" src={require("../assets/media/images/teapot_f.png")} alt="UpRabbit"/>
                <img id='staticRabbit' width="" src={require("../assets/media/images/teapot_f.png")} alt="UpRabbit"/>
            </div>
        </div>
    );
}
export default withNamespaces()(Robot);
