import React from 'react';
import './Journey.css';
import { withNamespaces } from 'react-i18next';
import MediaContent from './MediaContent';

function hide() {
    document.getElementById('staticRabbit').style.display = 'none';
    document.getElementById('downRabbit').style.display = 'block';
    document.getElementById('downRabbit').style.marginBottom = `20px`;
}
function show() {
    document.getElementById('staticRabbit').style.display = 'block';
    document.getElementById('downRabbit').style.display = 'none';
}

function Journey(props) {
    var pairs = [
        {
            header: props.t('d1h'),
            content: props.t('d1'),
            media: require("../assets/media/images/teapot_f.png"),
            alt: "Media here",
        },
        {
            header: props.t('d2h'),
            content: props.t('d2'),
            media: require("../assets/media/images/teapot_f.png"),
            alt: "Media here",
        },
        {
            header: props.t('d3h'),
            content: props.t('d3'),
            media: require("../assets/media/images/teapot_f.png"),
            alt: "Media here",
        },
        {
            header: props.t('d4h'),
            content: props.t('d4'),
            media: require("../assets/media/images/teapot_f.png"),
            alt: "Media here",
        },
        {
            header: props.t('d5h'),
            content: props.t('d5'),
            media: require("../assets/media/images/teapot_f.png"),
            alt: "Media here",
        },
        {
            header: props.t('d6h'),
            content: props.t('d6'),
            media: require("../assets/media/images/teapot_f.png"),
            alt: "Media here",
        },
        {
            header: props.t('d7h'),
            content: props.t('d7'),
            media: require("../assets/media/images/teapot_f.png"),
            alt: "Media here",
        },
        {
            header: props.t('d8h'),
            content: props.t('d8'),
            media: require("../assets/media/images/teapot_f.png"),
            alt: "Media here",
        },
        {
            header: props.t('d9h'),
            content: props.t('d9'),
            media: require("../assets/media/images/teapot_f.png"),
            alt: "Media here",
        },
        {
            header: props.t('d10h'),
            content: props.t('d10'),
            media: require("../assets/media/images/teapot_f.png"),
            alt: "Media here",
        },
        {
            header: props.t('d11h'),
            content: props.t('d11'),
            media: require("../assets/media/images/teapot_f.png"),
            alt: "Media here",
        },
        {
            header: props.t('d12h'),
            content: props.t('d12'),
            media: require("../assets/media/images/teapot_f.png"),
            alt: "Media here",
        },
        {
            header: props.t('d13h'),
            content: props.t('d13'),
            media: require("../assets/media/images/teapot_f.png"),
            alt: "Media here",
        },
    ]
    
    return (
        <>
            <div className="Journey">
                <span className="span" >
                    <h1>{props.t('Journey')}</h1>
                </span>
                {
                    pairs.map((i) => {
                        return <MediaContent header={i.header} media={i.media} alt={i.alt} content={i.content} />
                    })
                }
                <button style={{marginBottom: `50px`}} onClick={() => {
                    props.showSidebar();
                    //bg transparent for bunny and disappears when clicked
                    document.getElementById('staticRabbit').style.display = 'none';
                    document.getElementById('downRabbit').style.display = 'none';
                    setTimeout(() => {
                        document.getElementById('gallery').style.display = 'block';
                    } , 1500);
                }} >
                    <span onMouseOver={hide} onMouseOut={show} style={{width: `100%`, display: `flex`, flexDirection: `column`, margin: `0`}}>
                        <img id='staticRabbit' width="100px" src={require("../assets/media/images/rabbit.png")} alt="UpRabbit"/>

                        <img id='downRabbit' style={{display: `none`}}  width="100px" src={require("../assets/media/images/drabbit.png")} alt="DownRabbit"/>
                        <img id='hole'  width="100px" src={require("../assets/media/images/hole.png")} alt="hole"/>
                        
                    </span>
                    
                </button>
            </div>
        </>
    );
}

export default withNamespaces()(Journey);