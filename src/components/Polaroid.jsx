import React from "react";
import { withNamespaces } from 'react-i18next';
import "./Characters.css"

function Polaroid(props) {
    var mediajsx = null;
    if(props.vid === "0") {
        mediajsx = <img src={props.media} alt={props.alt}/>;
    } else {
        mediajsx = <iframe 
                        className="embed"
                        src={props.vid} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>;
    }
    return (
        <div className="polaroid-card" >
            <div className="img-wrapper" >
                {mediajsx}
            </div>
            <div className="caption-wrapper" >
                <p>{props.caption}</p>
            </div>
        </div>
    );
}

export default withNamespaces()(Polaroid);