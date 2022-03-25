import React from "react";
import { withNamespaces } from "react-i18next";
import './Robot.css'

function Robot(props) {
    return (
        <>
            <div className="Robot">
                <span className="span" >
                    <h1 className="titleR" >{props.t('Robot')}</h1>
                </span>
                {/* <div className="cadPaneR" >
                    <div className="cadContainer" >
                        <iframe 
                            className="robot1"
                            title="Arcanum Playing Field" 
                            src="https://myedu11994.autodesk360.com/shares/public/SH35dfcQT936092f0e43fe83a40a68a54008?mode=embed"
                            allowFullScreen={true} 
                            webkitallowfullscreen="true" 
                            mozallowfullscreen="true" 
                            frameBorder="0">
                        </iframe>
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
                </div>
                
                <div className="contentPaneR" >
                    <p>{props.t('placeholder')}</p>
                </div> */}

                <div>
                    <p style={{width: `60%`, marginRight: `auto`, marginLeft: `auto`}} >{props.t('vickytest')}</p>
                </div>
                <div>
                    <img id='staticRabbit' width="100px" src={require("../assets/media/images/teapot_f.png")} alt="UpRabbit"/>
                    <img id='staticRabbit' width="100px" src={require("../assets/media/images/teapot_f.png")} alt="UpRabbit"/>
                </div>

                <div>
                    <p style={{width: `60%`, marginRight: `auto`, marginLeft: `auto`}} >{props.t('vickytest')}</p>
                </div>
                <div>
                    <p style={{width: `60%`, marginRight: `auto`, marginLeft: `auto`}} >{props.t('vickytest')}</p>
                </div>
                <div>
                    <p style={{width: `60%`, marginRight: `auto`, marginLeft: `auto`}} >{props.t('vickytest')}</p>
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
                    <p style={{width: `60%`, marginRight: `auto`, marginLeft: `auto`}} >{props.t('vickytest')}</p>
                </div>
                <div>
                    <p style={{width: `60%`, marginRight: `auto`, marginLeft: `auto`}} >{props.t('vickytest')}</p>
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
                <br/>
                <br/>
                <br/>
                

                <div>
                    <img id='staticRabbit' width="100px" src={require("../assets/media/images/teapot_f.png")} alt="UpRabbit"/>
                    <img id='staticRabbit' width="100px" src={require("../assets/media/images/teapot_f.png")} alt="UpRabbit"/>
                    <img id='staticRabbit' width="100px" src={require("../assets/media/images/teapot_f.png")} alt="UpRabbit"/>
                </div>
                
               
            </div>
        </>
    );
}
export default withNamespaces()(Robot);