import React from "react";
import { withNamespaces } from "react-i18next";
import './Robot.css'

function Robot(props) {
    return (
        <div className="Robot">
            <span className="span" >
                <h1 className="titleArcanum" >{props.t('Robot')}</h1>
            </span>
            <div>
                <p>{props.t('r1')}</p>
            </div>
            <div>
                <img id='staticRabbit' width="60%" src={require("../assets/media/images/robot.jpg")} alt="UpRabbit"/>
                {/* <img id='staticRabbit' width="60%" src={require("../assets/media/images/teapot_f.png")} alt="UpRabbit"/> */}
                {/* Video 5883.mov */}
            </div>
            <div>
                <p>{props.t('r2')} <br/><br/> {props.t('drivetrain')} <br/> {props.t('input')} <br/> {props.t('reservoir')} <br/> {props.t('output')}</p>
            </div>
            <div>
                <p>{props.t('r3')}</p>
            </div>
            <div>
                <p>{props.t('r4')}</p>
            </div>
            <div>
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
                <p>{props.t('r5')}</p>
            </div>
            <div>
                <p>{props.t('r6')}</p>
            </div>
            <div>
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
            <div>
                {/* Video robot on ground */}
            </div>

            <div>
                <p>{props.t('r7')}</p>
            </div>
                           
            <div>
                <p>{props.t('r8')}</p>
            </div>
            <div>
                <img id='staticRabbit' width="60%" src={require("../assets/media/images/prototype1.jpg")} alt="UpRabbit"/>
            </div>

            <div>
                <p>{props.t('r9')}</p>
            </div>
            {/* Video prototype2 */}
            
            <div>
                <p>{props.t('r10')}</p>
            </div>
            <div>
                <img id='staticRabbit' width="60%" src={require("../assets/media/images/3dprintersetup.jpg")} alt="UpRabbit"/>
            </div>
            {/* Video 5553 */}

            <div>
                <p>{props.t('r11')}</p>
            </div>
            <div>
                <img id='staticRabbit' width="60%" src={require("../assets/media/images/IMG_5843.jpg")} alt="UpRabbit"/>
            </div>


        </div>
    );
}
export default withNamespaces()(Robot);