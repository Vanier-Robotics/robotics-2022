import React from "react";
import { withNamespaces } from 'react-i18next';
import "./Characters.css"

function Polaroid(props) {
    return (
        <div className="polaroid-card" >
            <div className="img-wrapper" >
                <img src={props.media} alt={props.alt}/>
            </div>
            <div className="caption-wrapper" >
                <p>{props.caption}</p>
            </div>
        </div>
    );
}

export default withNamespaces()(Polaroid);