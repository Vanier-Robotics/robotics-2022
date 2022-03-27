import React from "react";
import { withNamespaces } from "react-i18next";
import './Jackpot.css';

function Jackpot(props) {
    
    return (
        <div className="Jackpot">
            <span className="span" >
                <h1 className="titleArcanum" >{props.t('Jackpot')}</h1>
            </span>
            <div>
                <p>{props.t('j1')}<br/><br/>{props.t('j2')}<br/><br/>{props.t('j3')}</p>
            </div>
            <a className="VCSAWrapper" rel="noreferrer" target="_blank" href="https://www.vcsavanier.com/">
                <img className="vcsa" alt="title here" src={require("../assets/media/images/VCSA.png")}/>
            </a>
            <div>
                <p>{props.t('j4')}</p>
            </div>

            <img style={{width: `65%`, margin: `0px auto 0px`}} alt="title here" src={require("../assets/media/images/vcsa_support.png")}/>
            
            <div>
                <p>{props.t('j5')}</p>
            </div>

            <div>
                <a className="VCWrapper" rel="noreferrer" target="_blank" href="https://www.vaniercollege.qc.ca/">
                    <img className="vc" alt="title here" src={require("../assets/media/images/vc.png")}/>
                </a>
                <a className="CRCWrapper" rel="noreferrer" target="_blank" href="https://robo-crc.ca/">
                    <img className="crc" alt="title here" src={require("../assets/media/images/crc.png")}/>
                </a>
            </div>
            
            <br/><br/><br/>
        </div>
    );
}
export default withNamespaces()(Jackpot);