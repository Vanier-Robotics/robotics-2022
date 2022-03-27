import React from 'react';

export default function MediaContent(props) {
    var mediajsx = null, media2jsx = null;
    if(props.media === "0") {
        mediajsx = <></>;
    } else {
        mediajsx = <img src={props.media} alt={props.alt}/>;
    }
    if(props.media2 === "0") {
        media2jsx = <></>;
    } else {
        media2jsx = <img id='media2' src={props.media2} alt={props.alt}/>;
    }
    return (
        <div className='pairs'>
            <p className="contentBlurb" ><b><em><u>{props.header}</u></em></b><br/><br/>{props.content}</p>
            <div className="mediaBlurb">
                {mediajsx}
                {media2jsx}
            </div>

        </div>
    );
}