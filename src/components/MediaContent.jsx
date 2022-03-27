import React from 'react';

export default function MediaContent(props) {
    var mediajsx = populateJsx(props, 1);
    var media2jsx = populateJsx(props, 2);
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

const populateJsx = (props, id) => {
    var ret = null;
    switch (id) {
        case 1:
            if (props.media === "0") {
                ret = <></>;
            } else {
                ret = <img src={props.media} alt={props.alt}/>;
            }
            break;
        case 2:
            if (props.media2 === "0" && props.vid !== "0") {
                ret = <iframe 
                        className="embed"
                        src={props.vid} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                        </iframe>;
            } else if (props.media2 === "0" && props.vid === "0") {
                ret = <></>;
            } else {
                ret = <img src={props.media2} alt={props.alt}/>;
            }
            break;
        default:
            break;
    }
    return ret;
}