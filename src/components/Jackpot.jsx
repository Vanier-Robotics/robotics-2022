import React from "react";
import { withNamespaces } from "react-i18next";
import './Jackpot.css';

function Jackpot(props) {
    
    return (
        <div className="Jackpot page contents-page">
            <span className="span" >
                <h1 className="titleArcanum">{props.t('Jackpot')}</h1>
            </span>
            <div>
                <p>{props.t('j1')}</p><p>{props.t('j2')}</p><p>{props.t('j3')}</p>
            </div>
            <a className="image" rel="noreferrer" target="_blank" href="https://www.vcsavanier.com/">
                <img className="" alt="title here" src={require("../assets/media/images/VCSA.png")}/>
            </a>
            <div>
                <p>{props.t('j4')}</p>
            </div>
            <div className="image">
                <img alt="title here" src={require("../assets/media/images/vcsa_support.png")}/>
            </div>
            
            <div>
                <p>{props.t('j5')}</p>
            </div>

            <div className="image background">
                <a className="wapper" rel="noreferrer" target="_blank" href="https://www.vaniercollege.qc.ca/">
                    <img className="vc" alt="title here" src={require("../assets/media/images/vc.png")}/>
                </a>
                <a className="wapper" rel="noreferrer" target="_blank" href="https://robo-crc.ca/">
                    <img className="" alt="title here" src={require("../assets/media/images/crc.png")}/>
                </a>
            </div>
            
            <br/><br/><br/>
        </div>
    );
}
export default withNamespaces()(Jackpot);