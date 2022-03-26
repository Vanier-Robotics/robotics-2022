import React from "react";
import { withNamespaces } from "react-i18next";
import './Arcanum.css';

function Arcanum(props) {
    return (
        <div className="Arcanum">
            <span className="span" >
                <h1 className="titleArcanum" >{props.t('Arcanum')}</h1>
            </span>
            <div>
                <p>{props.t('a2')}</p>
            </div>
            <div>
                <p>{props.t('a3')}</p>
            </div>
            <div>
                <p>{props.t('a4')}</p>
            </div>
            <div className="cadPane" >
                <iframe 
                    className="playingField"
                    title="Arcanum Playing Field" 
                    src="https://myedu11994.autodesk360.com/shares/public/SH35dfcQT936092f0e430c4781ab51ec101b?mode=embed"
                    allowFullScreen={true} 
                    webkitallowfullscreen="true" 
                    mozallowfullscreen="true" 
                    frameBorder="0">
                </iframe>
            </div>
            <div className="contentPane" >
                <div>
                    <p>{props.t('a5')}</p>
                </div>
                <div>
                    <p>{props.t('a6')}</p>
                </div>
                <div>
                    <p>{props.t('a7')}</p>
                </div>
            </div>
            <div>
                <p><b><em>{props.t('a1')}</em></b></p>
            </div>
            <div>
                <p>{props.t('a8')}</p>
            </div>
            <div>
                <p>{props.t('a9')}</p>
            </div>
            <div>
                <p>{props.t('a10')}</p>
            </div>
        </div>
    );
}
export default withNamespaces()(Arcanum);