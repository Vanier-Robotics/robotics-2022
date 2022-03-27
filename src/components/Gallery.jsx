import React from "react";
import { withNamespaces } from 'react-i18next';
import './Gallery.css'


function Gallery(props) {
    var gallery = [
        {
            media: require("../assets/media/images/hat.png"),
        },
        {
            media: require("../assets/media/images/hat.png"),
        },
        {
            media: require("../assets/media/images/hat.png"),
        },
        {
            media: require("../assets/media/images/hat.png"),
        },

    ]
    
    return (
        <div className="Gallery page">
            <iframe 
                title="embed" 
                style={{borderRadius:`20px`}} 
                src="https://open.spotify.com/embed/playlist/0Kancw0BHelk6f15BCL8ir?utm_source=generator&theme=0" 
                width="300px" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            {
                gallery.map((item) => {
                    return (
                        <div className="gallery-item">
                            <img width="300px" src={item.media} alt="gallery" />
                        </div>
                    );
                })
            }            
        </div>
    );
}
export default withNamespaces()(Gallery);