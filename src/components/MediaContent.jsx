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
            <div className='contentBlurb'>
                <span className='header'>{props.header}</span>
                <p className="">{props.content}</p>
            </div>
            <div className="mediaBlurb">
                {mediajsx}
                {media2jsx}
            </div>

        </div>
    );
}