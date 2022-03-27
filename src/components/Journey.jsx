import React from 'react';
import './Journey.css';
import { withNamespaces } from 'react-i18next';
import MediaContent from './MediaContent';

// function hide() {
//     document.getElementById('staticRabbit').style.display = 'none';
//     document.getElementById('downRabbit').style.display = 'block';
//     // document.getElementById('downRabbit').style.marginBottom = `20px`;
// }
// function show() {
//     document.getElementById('staticRabbit').style.display = 'block';
//     document.getElementById('downRabbit').style.display = 'none';
// }

function Journey(props) {
    //D9 media 1 is MOV 5792 on drive
    //D8 media 2 is MOV drive/tutorial/00001.mts
    //D12 media 2 is MOV ducttape
    var pairs = [
        {
            header: props.t('d1h'),
            content: props.t('d1'),
            media: require("../assets/media/images/noah_sheesh_f.jpg"),
            media2: require("../assets/media/images/img_5777.jpg"),
            vid: "0",
            alt: "Media here",
        },
        {
            header: props.t('d2h'),
            content: props.t('d2'),
            media: require("../assets/media/images/IMG_0101.jpg"),
            media2: "0",
            vid: "0",
            alt: "Media here",
        },
        {
            header: props.t('d3h'),
            content: props.t('d3'),
            media: require("../assets/media/images/Picture2.png"),
            media2: require("../assets/media/images/IMG_2970.jpg"),
            vid: "0",
            alt: "Media here",
        },
        {
            header: props.t('d5h'),
            content: props.t('d5'),
            media: require("../assets/media/images/IMG_5571.jpg"),
            media2: "0",
            vid: "0",
            alt: "Media here",
        },
        {
            header: props.t('d6h'),
            content: props.t('d6'),
            media: require("../assets/media/images/IMG_5673.jpg"),
            media2: "0",
            vid: "0",
            alt: "Media here",
        },
        {
            header: props.t('d7h'),
            content: props.t('d7'),
            media: require("../assets/media/images/IMG_5490.jpg"),
            media2: require("../assets/media/images/IMG_3119.jpg"),
            vid: "0",
            alt: "Media here",
        },
        {
            header: props.t('d9h'),
            content: props.t('d9'),
            media: "0",
            media2: "0",
            vid: "https://www.youtube.com/embed/BWTq8sfRFl8",
            alt: "Media here",
        },
        {
            header: props.t('d8h'),
            content: props.t('d8'),
            media: require("../assets/media/images/IMG_5556.jpg"),
            media2: "0",
            vid: "https://www.youtube.com/embed/YSZ8taJoG1E",
            alt: "Media here",
        },
        {
            header: props.t('d10h'),
            content: props.t('d10'),
            media: require("../assets/media/images/IMG_5544.jpg"),
            media2: require("../assets/media/images/weblayout.png"),
            vid: "0",
            alt: "Media here",
        },
        {
            header: props.t('d11h'),
            content: props.t('d11'),
            media: require("../assets/media/images/IMG_5743.jpg"),
            media2: require("../assets/media/images/IMG_5517.jpg"),
            vid: "0",
            alt: "Media here",
        },
        {
            header: props.t('d12h'),
            content: props.t('d12'),
            media: require("../assets/media/images/IMG_3182.jpg"),
            media2: "0",
            vid: "https://www.youtube.com/embed/OZ7PcrgX0J0",
            alt: "Media here",
        },
        {
            header: props.t('d13h'),
            content: props.t('d13'),
            media: "0",
            media2: "0",
            vid: "0",
            alt: "Media here",
        },
    ]
    
    return (
        <div className="Journey page contents-page">
            <span className="span" >
                <h1>{props.t('Journey')}</h1>
            </span>
            {
                pairs.map((i) => {
                    return (
                        <>
                            <MediaContent header={i.header} media={i.media} media2={i.media2} vid={i.vid} alt={i.alt} content={i.content} />
                        </>
                        
                    );
                })
            }
            {/* <button style={{marginBottom: `50px`, border: `0px solid black`, backgroundColor: `transparent`}} onClick={() => {
                props.showSidebar();
                //bg transparent for bunny and disappears when clicked
                document.getElementById('staticRabbit').style.display = 'none';
                document.getElementById('downRabbit').style.display = 'none';
                setTimeout(() => {
                    document.getElementById('gallery').style.display = 'block';
                } , 1500);
            }} >
                <span onMouseOver={hide} onMouseOut={show} style={{width: `100%`, display: `flex`, flexDirection: `column`, margin: `0`}}>
                    <img id='staticRabbit' width="200px" src={require("../assets/media/images/rabbit.png")} alt="UpRabbit"/>
                    <img id='downRabbit' style={{display: `none`}}  width="200px" src={require("../assets/media/images/drabbit.png")} alt="DownRabbit"/>
                    <img id='hole'  width="200px" src={require("../assets/media/images/hole_f.png")} alt="hole"/>
                    <p style={{color: `#FFF`, fontSize: `10px`}} >{props.t('✨Click me for some hidden magic!✨')}</p>
                </span>
            </button> */}
        </div>
    );
}

export default withNamespaces()(Journey);