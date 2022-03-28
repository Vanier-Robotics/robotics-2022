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
                <img id='staticRabbit' width="60%" src={require("../assets/media/images/robot.jpg")} alt="UpRabbit"/>
            </div>
            {/* Video 5883.mov NOT THERE YET*/}
            <div className="embed">
            <iframe 
                className="embed"
                src="https://www.youtube.com/embed/onOpHBWF-oA"
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            </div>
            
            <div className="wider">
                <p>{props.t('r2')}</p>
                <ul className="list-spades">
                    <li>{props.t('drivetrain')}</li>
                    <li>{props.t('input')}</li>
                    <li>{props.t('reservoir')}</li>
                    <li>{props.t('output')}</li>
                </ul>
            </div>
            <div>
                <p>{props.t('r3')}</p>
            </div>
            <div>
                <p>{props.t('r4')}</p>
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
                <p>{props.t('r5')}</p>
            </div>
            <div>
                <p>{props.t('r6')}</p>
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
            {/* Video robot on ground */}
            <div className="embed">
            <iframe 
                className="embed"
                src="https://www.youtube.com/embed/UFwMoRBLNxw"
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            </div>
            

            <div>
                <p>{props.t('r7')}</p>
            </div>
                           
            <div>
                <p>{props.t('r8')}</p>
            </div>
            <div className="image">
                <img id='staticRabbit' width="60%" src={require("../assets/media/images/prototype1.jpg")} alt="UpRabbit"/>
            </div>

            <div>
                <p>{props.t('r9')}</p>
            </div>
            {/* Video prototype2 */}
            <div className="embed">
            <iframe 
                className="embed"
                src="https://www.youtube.com/embed/Q6N6rlf7yqI"
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            </div>
            
            
            <div>
                <p>{props.t('r10')}</p>
            </div>
            <div className="image">
                <img id='staticRabbit' width="60%" src={require("../assets/media/images/3dprintersetup.jpg")} alt="UpRabbit"/>
            </div>
            {/* Video 5553 */}
            <div className="embed">
            <iframe 
                className="embed"
                src="https://www.youtube.com/embed/SOBLcYnDarU"
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>{/*  */}
            </div>
            

            <div>
                <p>{props.t('r11')}</p>
            </div>
            <div className="image">
                <img id='staticRabbit' width="60%" src={require("../assets/media/images/IMG_5843.jpg")} alt="UpRabbit"/>
            </div>


        </div>
    );
}
export default withNamespaces()(Robot);
