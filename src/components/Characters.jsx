import React from "react";
import { withNamespaces } from 'react-i18next';
import "./Characters.css"
import CharacterCard from "./CharacterCard";

function Team (props) {

    return (
        <div>
            <h1>{props.header}</h1>
            <div>
                {
                    props.members.map((i) => {
                        return <CharacterCard front={i.front} back={i.back} alt={i.alt} />
                    })
                }
            </div>
            <div className="content-container">
            <span className="header">{props.pheader}</span>
            <p className="contentBlurb advice">{props.p}</p>
            </div>
        </div>
    )
}

function Characters(props) {

    var captains = [
        {
            front: require("../assets/media/images/members/fronts/captains/Sabrinas_TEAM_captain_card.png"),
            back: require("../assets/media/images/members/backs/b_Sabrina.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_build_Joy.png"),
            back: require("../assets/media/images/members/backs/b_Joy.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_prog_Andrae.png"),
            back: require("../assets/media/images/members/backs/b_Andrae.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_kiosk_Jeanard.png"),
            back: require("../assets/media/images/members/backs/b_Jeanard.png"),
            alt: 'Card',
        },
        // {
        //     front: require("../assets/media/images/members/fronts/captains/f_capt_kiosk_Emily.png"),
        //     back: require("../assets/media/images/members/backs/b_Emily.png"),
        //     alt: 'Card',
        // },
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_web_Shanmukh.png"),
            back: require("../assets/media/images/members/backs/b_Shanmukh.png"),
            alt: 'Card',
        },
        // {
        //     front: require("../assets/media/images/members/fronts/captains/f_capt_vid_Dellen.png"),
        //     back: require("../assets/media/images/members/backs/b_Dellen.png"),
        //     alt: 'Card',
        // },
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_vid_Tramanh.png"),
            back: require("../assets/media/images/members/backs/b_Tramanh.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_journ_Victoria.png"),
            back: require("../assets/media/images/members/backs/b_Victoria.png"),
            alt: 'Card',
        }
    ];
    var build = [
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_build_Joy.png"),
            back: require("../assets/media/images/members/backs/b_Joy.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Sabrina.png"),
            back: require("../assets/media/images/members/backs/b_Sabrina.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Eliot.png"),
            back: require("../assets/media/images/members/backs/b_Eliot.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Dellen.png"),
            back: require("../assets/media/images/members/backs/b_Dellen.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Edelina.png"),
            back: require("../assets/media/images/members/backs/b_Edelina.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Minhtri.png"),
            back: require("../assets/media/images/members/backs/b_Minhtri.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Bilal.png"),
            back: require("../assets/media/images/members/backs/b_Bilal.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Shanmukh.png"),
            back: require("../assets/media/images/members/backs/b_Shanmukh.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Nathaniel.png"),
            back: require("../assets/media/images/members/backs/b_Nathaniel.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Saklian.png"),
            back: require("../assets/media/images/members/backs/b_Saklian.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Jonathan.png"),
            back: require("../assets/media/images/members/backs/b_Jonathan.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Massimo.png"),
            back: require("../assets/media/images/members/backs/b_Massimo.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Leonardo.png"),
            back: require("../assets/media/images/members/backs/b_Leonardo.png"),
            alt: 'Card',
        }
    ];
    var programming = [
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_prog_Andrae.png"),
            back: require("../assets/media/images/members/backs/b_Andrae.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/programming/f_prog_Minhtri.png"),
            back: require("../assets/media/images/members/backs/b_Minhtri.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/programming/f_prog_Eliot.png"),
            back: require("../assets/media/images/members/backs/b_Eliot.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/programming/f_prog_Shanmukh.png"),
            back: require("../assets/media/images/members/backs/b_Shanmukh.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/programming/f_prog_Ethan.png"),
            back: require("../assets/media/images/members/backs/b_Ethan.png"),
            alt: 'Card',
        }
    ];
    var kiosk = [
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_kiosk_Jeanard.png"),
            back: require("../assets/media/images/members/backs/b_Jeanard.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_kiosk_Emily.png"),
            back: require("../assets/media/images/members/backs/b_Emily.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/kiosk/f_kiosk_Joy.png"),
            back: require("../assets/media/images/members/backs/b_Joy.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/kiosk/f_kiosk_Joriz.png"),
            back: require("../assets/media/images/members/backs/b_Joriz.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/kiosk/f_kiosk_Dellen.png"),
            back: require("../assets/media/images/members/backs/b_Dellen.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/kiosk/f_kiosk_Maya.png"),
            back: require("../assets/media/images/members/backs/b_Maya.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/kiosk/f_kiosk_Sabrina.png"),
            back: require("../assets/media/images/members/backs/b_Sabrina.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/kiosk/f_kiosk_Gassia.png"),
            back: require("../assets/media/images/members/backs/b_Gassia.png"),
            alt: 'Card',
        }
    ];
    var website = [
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_web_Shanmukh.png"),
            back: require("../assets/media/images/members/backs/b_Shanmukh.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/website/f_web_Andrae.png"),
            back: require("../assets/media/images/members/backs/b_Andrae.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/website/f_web_Jeanard.png"),
            back: require("../assets/media/images/members/backs/b_Jeanard.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/website/f_web_Luca.png"),
            back: require("../assets/media/images/members/backs/b_Luca.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/website/f_web_Alex.png"),
            back: require("../assets/media/images/members/backs/b_Alex.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/website/f_web_Adam.png"),
            back: require("../assets/media/images/members/backs/b_Adam.png"),
            alt: 'Card',
        }
    ];
    var video = [
        
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_vid_Tramanh.png"),
            back: require("../assets/media/images/members/backs/b_Tramanh.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_vid_Dellen.png"),
            back: require("../assets/media/images/members/backs/b_Dellen.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/video/f_vid_Anthony.png"),
            back: require("../assets/media/images/members/backs/b_Anthony.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/video/f_vid_Kalli.png"),
            back: require("../assets/media/images/members/backs/b_Kalli.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/video/f_vid_Miranda.png"),
            back: require("../assets/media/images/members/backs/b_Miranda.png"),
            alt: 'Card',
        }
    ];
    var journalism = [
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_journ_Victoria.png"),
            back: require("../assets/media/images/members/backs/b_Victoria.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/journalism/f_journ_Flavia.png"),
            back: require("../assets/media/images/members/backs/b_Flavia.png"),
            alt: 'Card',
        }
    ];
    var mentor = [
        {
            front: require('../assets/media/images/members/fronts/mentor/f_Ashley.png'),
            back: require('../assets/media/images/members/backs/b_Ashley.png'),
            alt: 'Ashley',
        }
    ]
    var teams = [
        {
            title: 'Captains',
            header: props.t("Captains: "),
            members: captains,
            pheader: props.t('c2h'),
            p: props.t('c2')
        },
        {
            title: 'Build',
            header: props.t("Build Team: "),
            members: build,
            pheader: props.t('c3h'),
            p: props.t('c3')
        },
        {
            title: 'Programming',
            header: props.t("Programming Team: "),
            members: programming,
            pheader: props.t('c4h'),
            p: props.t('c4')
        },
        {
            title: 'Kiosk',
            header: props.t("Kiosk Team: "),
            members: kiosk,
            pheader: props.t('c5h'),
            p: props.t('c5')
        },
        {
            title: 'Website',
            header: props.t("Website Team: "),
            members: website,
            pheader: props.t('c6h'),
            p: props.t('c6')
        },
        {
            title: 'Journalism',
            header: props.t("Journalism Team: "),
            members: journalism,
            pheader: props.t('c7h'),
            p: props.t('c7')
        },
        {
            title: 'Video',
            header: props.t("Video Team: "),
            members: video,
            pheader: props.t('c8h'),
            p: props.t('c8')
        },
        {
            title: 'Mentor',
            header: props.t("Mentor: "),
            members: mentor,
            pheader: props.t('c1h'),
            p: props.t('c1')
        }
    ]

    return (
        <div className="Characters page" >
            {/* <h1 style={{margin: `0px`, height: `10%`}} >Our Characters</h1> */}
            <div className="cards">
                {
                teams.map((t) => {return (<Team title={t.title} header={t.header} members={t.members} pheader={t.pheader} p={t.p}/>);})}
            </div>
        </div>
    );

}
export default withNamespaces()(Characters);