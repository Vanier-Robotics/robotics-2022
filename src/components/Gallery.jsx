import React from "react";
import { withNamespaces } from 'react-i18next';
import './Gallery.css'
import Polaroid from './Polaroid';


function Gallery(props) {
    var accomplishments = [
        {
            media: require("../assets/media/images/gallery/our-accomplishments/The_end_of_our_sanity_begins_here.JPG"),
            alt: "image",
            caption: props.t('The end of our sanity starts here'),
        },
        {
            media: require("../assets/media/images/gallery/our-accomplishments/Our_spare_time_went_to_great_use.png"),
            alt: "image",
            caption: props.t('Our spare time went to great use'),
        },
        {
            media: require("../assets/media/images/gallery/our-accomplishments/The_bunny_is_impressed_at_our_performance.png"),
            alt: "image",
            caption: props.t('The bunny is impressed with our work'),
        },
        {
            media: require("../assets/media/images/gallery/our-accomplishments/Film_shenanigans.png"),
            alt: "image",
            caption: props.t('Film shenanigans'),
        },
        {
            media: require("../assets/media/images/gallery/our-accomplishments/Meetings_in_the_snow_were_a_good_idea.JPG"),
            alt: "image",
            caption: props.t('Meetings in the snow were a good idea'),
        },
        {
            media: require("../assets/media/images/gallery/our-accomplishments/Our_abduction_tactics_became_more_defined.png"),
            alt: "image",
            caption: props.t('Our abduction tactics became more defined'),
        },
        {
            media: require("../assets/media/images/gallery/our-accomplishments/Waiting_hours_for_food_and_got_ripped_off.png"),
            alt: "image",
            caption: props.t('Waiting hours for food and got ripped off'),
        },
        {
            media: require("../assets/media/images/gallery/our-accomplishments/Robotics_Fan_club_was_a_thing_for_a_bit.JPG"),
            alt: "image",
            caption: props.t('Robotics Fan club was a thing for a bit'),
        },
        {
            media: require("../assets/media/images/gallery/our-accomplishments/Minecraft_Wedding.png"),
            alt: "image",
            caption: props.t('Minecraft Wedding'),
        },
        {
            media: require("../assets/media/images/gallery/our-accomplishments/Our_robot_finally__worked_.png"),
            alt: "image",
            caption: props.t('Our Robot finally Worked'),
        },
    ]
    var delving = [
        {
            media: require("../assets/media/images/gallery/delving-through-past-years/Past_year_s_blessing_for_us.JPG"),
            alt: "image",
            caption: props.t('Past year\'s blessing for us'),
        },
        {
            media: require("../assets/media/images/gallery/delving-through-past-years/Flying_Mudkip.png"),
            alt: "image",
            caption: props.t('Flying Mudkip'),
        },
        {
            media: require("../assets/media/images/gallery/delving-through-past-years/Little_Turtwig.png"),
            alt: "image",
            caption: props.t('Little Turtwig'),
        },
        {
            media: require("../assets/media/images/gallery/delving-through-past-years/PikaRoof.png"),
            alt: "image",
            caption: props.t('PikaRoof'),
        },
        {
            media: require("../assets/media/images/gallery/delving-through-past-years/Squirtle_overdosed_on_Monster.jpg"),
            alt: "image",
            caption: props.t('Squirtle overdosed on Monster'),
        },
        {
            media: require("../assets/media/images/gallery/delving-through-past-years/Teddiursa_the_botanist.png"),
            alt: "image",
            caption: props.t('Teddiursa the botanist'),
        },
        {
            media: require("../assets/media/images/gallery/delving-through-past-years/Upside_Down_Diglet_.png"),
            alt: "image",
            caption: props.t('Upside Down Diglet'),
        },
        {
            media: require("../assets/media/images/gallery/delving-through-past-years/Marauders_map.JPG"),
            alt: "image",
            caption: props.t('Marauders map'),
        },
        {
            media: require("../assets/media/images/gallery/delving-through-past-years/Forgotten_compote_au_pomme.JPG"),
            alt: "image",
            caption: props.t('Forgotten compote au pomme'),
        },
    ]
    var insane = [
        {
            media: require("../assets/media/images/gallery/insane-capt/_But_you,_I_am_afraid,_are_maidenless_.JPG"),
            alt: "image",
            caption: props.t('But you, I am afraid, are maidenless'),
        },
        {
            media: require("../assets/media/images/gallery/insane-capt/Birthday_Girl_s_Sled_Party.JPG"),
            alt: "image",
            caption: props.t('Birthday girl\'s sled party'),
        },
        {
            media: require("../assets/media/images/gallery/insane-capt/Proper_measurements_of_god_knows_what.png"),
            alt: "image",
            caption: props.t('Proper measurements of god knows what'),
        },
        {
            media: require("../assets/media/images/gallery/insane-capt/Sabrina-rella.png"),
            alt: "image",
            caption: props.t('Sabrina-rella'),
        },
        {
            media: require("../assets/media/images/gallery/insane-capt/Stalking_the_very_few_journalists.png"),
            alt: "image",
            caption: props.t('Stalking the very few journalists'),
        },
        {
            media: require("../assets/media/images/gallery/insane-capt/Team_captain_btw.png"),
            alt: "image",
            caption: props.t('Team captain btw'),
        },
        {
            media: require("../assets/media/images/gallery/insane-capt/The_girl_who_lived_through_midterms.png"),
            alt: "image",
            caption: props.t('The girl who lived through midterms'),
        },
        {
            media: require("../assets/media/images/gallery/insane-capt/Stayed_up_till_3am_to_study_for_chemistry.png"),
            alt: "image",
            caption: props.t('Stayed up till 3am to study for chemistry'),
        },
        {
            media: require("../assets/media/images/gallery/insane-capt/Disciplining_the_troublesome_captain.png"),
            alt: "image",
            caption: props.t('Disciplining the troublesome captain'),
        },
    ]
    var shan = [
        {
            media: require("../assets/media/images/gallery/just-shan/Shan_s_always_the_odd_one_out.png"),
            alt: "image",
            caption: props.t('Shan\'s always the odd one out'),
        },
        {
            media: require("../assets/media/images/gallery/just-shan/His_enthusiasm_at_time_is_problematic.jpg"),
            alt: "image",
            caption: props.t('His enthusiasm at time is problematic'),
        },
        {
            media: require("../assets/media/images/gallery/just-shan/_Ill_pay_anyone_5__to_center_a_div_.png"),
            alt: "image",
            caption: props.t('Ill pay anyone 5 to center a div'),
        },
        {
            media: require("../assets/media/images/gallery/just-shan/Clara_from_Nemo.png"),
            alt: "image",
            caption: props.t('Clara from Nemo'),
        },
        {
            media: require("../assets/media/images/gallery/just-shan/Following_the_restrictions_as_we_should.png"),
            alt: "image",
            caption: props.t('Following the restrictions as we should'),
        },
        {
            media: require("../assets/media/images/gallery/just-shan/He_heard_lactate_pills_instead_of_lactaid.png"),
            alt: "image",
            caption: props.t('He heard lactate pills instead of "lactaid"'),
        },
        {
            media: require("../assets/media/images/gallery/just-shan/Websites__Frustrations_unearthed.JPG"),
            alt: "image",
            caption: props.t('Websites & Frustrations unearthed'),
        },
    ]
    var hectic = [
        {
            media: require("../assets/media/images/gallery/kiosk-hectic-adventures/Kiosk_captain_was_very_popular.png"),
            alt: "image",
            caption: props.t('Kiosk captain was very popular'),
        },
        {
            media: require("../assets/media/images/gallery/kiosk-hectic-adventures/Life_being_famous.JPG"),
            alt: "image",
            caption: props.t('Life being famous'),
        },
        {
            media: require("../assets/media/images/gallery/kiosk-hectic-adventures/Joriz_was_alone_for_kiosk_that_day.png"),
            alt: "image",
            caption: props.t('Joriz was alone for kiosk that day'),
        },
        {
            media: require("../assets/media/images/gallery/kiosk-hectic-adventures/LET’S_MAKE_THE_ROBOT_PINK.jpg"),
            alt: "image",
            caption: props.t('LET\'S MAKE THE ROBOT PINK'),
        },
        {
            media: require("../assets/media/images/gallery/kiosk-hectic-adventures/Love_from_the_kiosk_captain.JPG"),
            alt: "image",
            caption: props.t('Love from the kiosk captain'),
        },
        {
            media: require("../assets/media/images/gallery/kiosk-hectic-adventures/quack_attack.jpg"),
            alt: "image",
            caption: props.t('Quack attack'),
        },
        {
            media: require("../assets/media/images/gallery/kiosk-hectic-adventures/Bear_hugs.png"),
            alt: "image",
            caption: props.t('Bear hugs'),
        },
        {
            media: require("../assets/media/images/gallery/kiosk-hectic-adventures/doggo_s_advice.png"),
            alt: "image",
            caption: props.t('Doggo\'s advice'),
        },
    ]
    var babysitting = [
        {
            media: require("../assets/media/images/gallery/adventures-babysitting/Babysitting_the_mother.png"),
            alt: "image",
            caption: props.t('Babysitting the mother'),
        },
        {
            media: require("../assets/media/images/gallery/adventures-babysitting/Baptism_into_insanity.JPG"),
            alt: "image",
            caption: props.t('Baptism into insanity'),
        },
        {
            media: require("../assets/media/images/gallery/adventures-babysitting/Child_#2.png"),
            alt: "image",
            caption: props.t('Child #2'),
        },
        {
            media: require("../assets/media/images/gallery/adventures-babysitting/First_day_at_school.png"),
            alt: "image",
            caption: props.t('First day at school'),
        },
        {
            media: require("../assets/media/images/gallery/adventures-babysitting/Proud_family.png"),
            alt: "image",
            caption: props.t('Proud family'),
        },
        {
            media: require("../assets/media/images/gallery/adventures-babysitting/Godmother_auditions_didn_t_go_as_planned.png"),
            alt: "image",
            caption: props.t('Godmother auditions didn\'t go as planned'),
        },
        {
            media: require("../assets/media/images/gallery/adventures-babysitting/uncle_anthony.jpg"),
            alt: "image",
            caption: props.t('Uncle anthony'),
        },
        {
            media: require("../assets/media/images/gallery/adventures-babysitting/Pedro_goes_to_daycare.png"),
            alt: "image",
            caption: props.t('Pedro goes to daycare'),
        },
        {
            media: require("../assets/media/images/gallery/adventures-babysitting/Pedro_taking_a_nap_while_the_team_panics.png"),
            alt: "image",
            caption: props.t('Pedro taking a nap while the team panics'),
        },
        {
            media: require("../assets/media/images/gallery/adventures-babysitting/fire.jpg"),
            alt: "image",
            caption: props.t('Fire'),
        },
        {
            media: require("../assets/media/images/gallery/adventures-babysitting/c_ck-of-the-rock_(that_s_the_real_name...).jpg"),
            alt: "image",
            caption: props.t('Coq of the rock (that\'s the real name...)'),
        },
        {
            media: require("../assets/media/images/gallery/adventures-babysitting/torak.jpg"),
            alt: "image",
            caption: props.t('torak'),
        },
        {
            media: require("../assets/media/images/gallery/adventures-babysitting/Talking_back_to_the_godmother.png"),
            alt: "image",
            caption: props.t('Talking back to the godmother'),
        },
    ]
    var chairs = [
        {
            media: require("../assets/media/images/gallery/struggle-no-chairs/flavia_to_victoria__just_why_.jpg"),
            alt: "image",
            caption: props.t('Flavia to Victoria: just why?'),
        },
        {
            media: require("../assets/media/images/gallery/struggle-no-chairs/Minh-Tri_s_solution_to_no_chairs.png"),
            alt: "image",
            caption: props.t('Minh-Tri\'s solution to no chairs'),
        },
        {
            media: require("../assets/media/images/gallery/struggle-no-chairs/Other_people_became_our_seats.png"),
            alt: "image",
            caption: props.t('Other people became our seats'),
        },
        {
            media: require("../assets/media/images/gallery/struggle-no-chairs/pov__it_s_sad_girl_hour_but_you_still_have_work_to_do.png"),
            alt: "image",
            caption: props.t('POV: it\'s sad girl hour but you stillhave to work'),
        },
        {
            media: require("../assets/media/images/gallery/struggle-no-chairs/Sitting_on_the_edge.png"),
            alt: "image",
            caption: props.t('Sitting on the edge'),
        },
        {
            media: require("../assets/media/images/gallery/struggle-no-chairs/Step_stool_productivity.png"),
            alt: "image",
            caption: props.t('Step stool productivity'),
        },
        {
            media: require("../assets/media/images/gallery/struggle-no-chairs/The_stem_chairs_were_too_far_away.png"),
            alt: "image",
            caption: props.t('The stem chairs were too far away'),
        },
        {
            media: require("../assets/media/images/gallery/struggle-no-chairs/We_had_to_share_chairs_at_one_point.png"),
            alt: "image",
            caption: props.t('We had to share chairs at one point'),
        },
    ]
    var chaos = [
        {
            media: require("../assets/media/images/gallery/pure-chaos/When_the_programming_captains_isn_t_around.png"),
            alt: "image",
            caption: props.t('When the programming captains isn\'t around'),
        },
        {
            media: require("../assets/media/images/gallery/pure-chaos/When_the_programming_captain_is_around.png"),
            alt: "image",
            caption: props.t('When the programming captain is around'),
        },
        {
            media: require("../assets/media/images/gallery/pure-chaos/tug_of_war.png"),
            alt: "image",
            caption: props.t('Tug of war'),
        },
        {
            media: require("../assets/media/images/gallery/pure-chaos/He_died_from_exhaustion.png"),
            alt: "image",
            caption: props.t('He died from exhaustion'),
        },
        {
            media: require("../assets/media/images/gallery/pure-chaos/May_or_may_not_have_gone_mad.png"),
            alt: "image",
            caption: props.t('May or may not have gone mad'),
        },
        {
            media: require("../assets/media/images/gallery/pure-chaos/Paolo_protection_squad__1.JPG"),
            alt: "image",
            caption: props.t('Paolo protection squad'),
        },
        {
            media: require("../assets/media/images/gallery/pure-chaos/She_slept_the_frustration_away.png"),
            alt: "image",
            caption: props.t('She slept the frustration away'),
        },
        {
            media: require("../assets/media/images/gallery/pure-chaos/spot_the_sabrinas.png"),
            alt: "image",
            caption: props.t('Spot the sabrinas'),
        },
        {
            media: require("../assets/media/images/gallery/pure-chaos/Winter_brawls.JPG"),
            alt: "image",
            caption: props.t('Winter brawls'),
        },
    ]
    var ourselves = [
        {
            media: require("../assets/media/images/gallery/being-ourselves/_We_had_to_find_a_way_to_fit_into_frame_.png"),
            alt: "image",
            caption: props.t('We had to find a way to fit into frame'),
        },
        {
            media: require("../assets/media/images/gallery/being-ourselves/Edelina_and_3_short_people.jpg"),
            alt: "image",
            caption: props.t('Edelina and 3 short people'),
        },
        {
            media: require("../assets/media/images/gallery/being-ourselves/Moments_before_Victoria_got_stabbed.png"),
            alt: "image",
            caption: props.t('Moments before Victoria got stabbed'),
        },
        {
            media: require("../assets/media/images/gallery/being-ourselves/Pokemon_is_productive_for_some.png"),
            alt: "image",
            caption: props.t('Pokemon is productive for some'),
        },
        {
            media: require("../assets/media/images/gallery/being-ourselves/The_robotics_team_from_Andrae_s_viewpoint.jpg"),
            alt: "image",
            caption: props.t('The robotics team from Andrae\'s viewpoint'),
        },
        {
            media: require("../assets/media/images/gallery/being-ourselves/tweedledee___tweedledum_.png"),
            alt: "image",
            caption: props.t('Tweedledee & Tweedledum'),
        },
        {
            media: require("../assets/media/images/gallery/being-ourselves/Victoria_looking_like_a_child.png"),
            alt: "image",
            caption: props.t('Victoria looking like a child'),
        },
        {
            media: require("../assets/media/images/gallery/being-ourselves/We_enjoy_being_violent_at_times.png"),
            alt: "image",
            caption: props.t('We enjoy being violent at times'),
        },
    ]
    var forgotten = [
        {
            media: require("../assets/media/images/gallery/honoring-forgotten/The_Great_Noah_Himself.png"),
            alt: "image",
            caption: props.t('The Great Noah Himself'),
        },
        {
            media: require("../assets/media/images/gallery/honoring-forgotten/The_Great_Noah_Glowup.jpg"),
            alt: "image",
            caption: props.t('The Great Noah Glowup'),
        },
        {
            media: require("../assets/media/images/gallery/honoring-forgotten/The_other_CET_student.jpg"),
            alt: "image",
            caption: props.t('The other CET student'),
        },
        {
            media: require("../assets/media/images/gallery/honoring-forgotten/The_Teams_Pasture.jpg"),
            alt: "image",
            caption: props.t('The Team\'s Pastor'),
        },
        {
            media: require("../assets/media/images/gallery/honoring-forgotten/Bless_our_amazing_artists.png"),
            alt: "image",
            caption: props.t('Bless our amazing artists'),
        },
        {
            media: require("../assets/media/images/gallery/honoring-forgotten/Journalism_Team.png"),
            alt: "image",
            caption: props.t('Journalism Team'),
        },
        {
            media: require("../assets/media/images/gallery/honoring-forgotten/Sad_bunny.JPG"),
            alt: "image",
            caption: props.t('Sad bunny'),
        },
        {
            media: require("../assets/media/images/gallery/honoring-forgotten/Our_save_and_grace.png"),
            alt: "image",
            caption: props.t('Our save and grace'),
        },
        {
            media: require("../assets/media/images/gallery/honoring-forgotten/Has_he_shown_up_.jpg"),
            alt: "image",
            caption: props.t('Has he shown up?'),
        },
        {
            media: require("../assets/media/images/gallery/honoring-forgotten/Victor_Marchand.png"),
            alt: "image",
            caption: props.t('Victor Marchand'),
        },
        {
            media: require("../assets/media/images/gallery/honoring-forgotten/Good_old_Alex.png"),
            alt: "image",
            caption: props.t('Good old Alex'),
        },
    ]
    
    
    return (
        <div className="Gallery page">
            <span className="banner" >
                <h1 className="titleArcanum">{props.t('We\'re all mad here!')}</h1>
            </span>
            <iframe 
                title="embed" 
                style={{borderRadius:`25px`}} 
                src="https://open.spotify.com/embed/playlist/0Kancw0BHelk6f15BCL8ir?utm_source=generator&theme=0" 
                width="300px" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <div className="cards">
                {
                    accomplishments.map((i) => {
                        return (
                            <Polaroid media={i.media} caption={i.caption} alt={i.alt} />
                        );
                    })
                }
                {
                    delving.map((i) => {
                        return (
                            <Polaroid media={i.media} caption={i.caption} alt={i.alt} />
                        );
                    })
                }
                {
                    insane.map((i) => {
                        return (
                            <Polaroid media={i.media} caption={i.caption} alt={i.alt} />
                        );
                    })
                }
                {
                    shan.map((i) => {
                        return (
                            <Polaroid media={i.media} caption={i.caption} alt={i.alt} />
                        );
                    })
                }
                {
                    hectic.map((i) => {
                        return (
                            <Polaroid media={i.media} caption={i.caption} alt={i.alt} />
                        );
                    })
                }
                {
                    babysitting.map((i) => {
                        return (
                            <Polaroid media={i.media} caption={i.caption} alt={i.alt} />
                        );
                    })
                }
                {
                    chairs.map((i) => {
                        return (
                            <Polaroid media={i.media} caption={i.caption} alt={i.alt} />
                        );
                    })
                }
                {
                    chaos.map((i) => {
                        return (
                            <Polaroid media={i.media} caption={i.caption} alt={i.alt} />
                        );
                    })
                }
                {
                    ourselves.map((i) => {
                        return (
                            <Polaroid media={i.media} caption={i.caption} alt={i.alt} />
                        );
                    })
                }
                {
                    forgotten.map((i) => {
                        return (
                            <Polaroid media={i.media} caption={i.caption} alt={i.alt} />
                        );
                    })
                }
            </div>
        </div>
    );
}
export default withNamespaces()(Gallery);