import React from "react";
import { withNamespaces } from "react-i18next";
import './Arcanum.css';

function ListItem(props) {
    // var output;
    console.debug(props.list.length);
    if (props.list.length > 0) {
        return (<li>{props.text}<ul className="list-clubs">{props.list.map ((r) => {return (<li>{r.text}</li>);})}</ul></li>)
    } else {
        return (
            <li>
                {props.text}
            </li>
        )
    }
}

function Arcanum(props) {
    var rules = [
        {
            text: props.t('a5'),
            list: [{text: props.t('a51')}]
        },
        {
            text: props.t('a6'),
            list: []
        },
        {
            text: props.t('a7'),
            list: [
                {text: props.t('a71')},
                {text: props.t('a72')},
                {text: props.t('a73')},
                {text: props.t('a74')},
                {text: props.t('a75')},
            ]},
        {
            text: props.t('a8'),
            list: []
        },
        {
            text: props.t('a9'),
            list: []
        }
    ]
    return (
        <div id="Arcanum" className="Arcanum page contents-page bg-right">
            <span className="banner" >
                <h1 className="titleArcanum" >{props.t('Arcanum')}</h1>
            </span>
            <div>
                <p><b><em>{props.t('a1')}</em></b></p>
            </div>
            <div>
                <p>{props.t('a2')}</p>
            </div>
            <a className="CRCWrapper" rel="noreferrer" target="_blank" href="https://robo-crc.ca/">
                <img className="crc" alt="title here" src={require("../assets/media/images/crc.png")}/>
            </a>
            <div>
                <p>{props.t('a3')}</p>
            </div>
            <div>
                <p>{props.t('a4')}</p>
            </div>

            <div className="cadPane embed">
                <iframe 
                    className="playingField"
                    title="Arcanum Playing Field" 
                    src="https://myedu11994.autodesk360.com/shares/public/SH35dfcQT936092f0e430c4781ab51ec101b?mode=embed"
                    allowFullScreen={true} 
                    webkitallowfullscreen="true" 
                    mozallowfullscreen="true" 
                    frameBorder="0">
                </iframe>
            </div>
            
            <div>
                <ul className="list-hearts">
                    {
                        rules.map ((r) => {
                            return (<ListItem text={r.text} list={r.list}></ListItem>);
                        })
                    }
                </ul>
            </div>
            <div>
                <p>{props.t('a10')}</p>
            </div>
            <iframe 
                className="embed"
                src="https://www.youtube.com/embed/6XT0Sf5PJDM" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    );
}
export default withNamespaces()(Arcanum);