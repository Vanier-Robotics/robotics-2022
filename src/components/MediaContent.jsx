import React from 'react';

export default function MediaContent(props) {
    return (
        <div className='pairs'>
            <p className="contentBlurb" ><b><em>{props.header}</em></b><br/>{props.content}</p>
            <div className="mediaBlurb">
                <img src={props.media} alt={props.alt}/>
            </div>

        </div>
    );
}