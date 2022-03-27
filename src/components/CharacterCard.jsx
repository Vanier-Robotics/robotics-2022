import React from "react";
import { withNamespaces } from 'react-i18next';
import "./Characters.css"

function CharacterCard(props) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={props.front} alt={props.alt}/>                    
                </div>

                <div className="flip-card-back">
                    <img src={props.back} alt={props.alt}/>
                </div>
            </div>
        </div>
    );
}

export default withNamespaces()(CharacterCard);