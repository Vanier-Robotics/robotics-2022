import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as VscIcons from 'react-icons/vsc';
import * as GiIcons from 'react-icons/gi';
import * as Io5Icons from 'react-icons/io5';
import * as HeroIcons from 'react-icons/hi';
import * as BsIcons from 'react-icons/bs';
import * as GrIcons from 'react-icons/gr';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';


function Navbar(props) {
    
    const [lang, setLang] = useState(false);
    const toggleLang = () => {
        setLang(!lang);
        if (lang) {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('fr');
        }
    }
    
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    {/* <FaIcons.FaBars onClick={showSidebar} /> */}
                    <img alt='menu bars' src={require('../assets/media/images/bars.png')} onClick={props.showSidebar}/>
                </Link>
            </div>
            <nav className={props.sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={props.showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                        <VscIcons.VscClose />
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to='#'>
                            <div onClick={toggleLang}>{props.t('Language')}</div>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to='/'>
                            <FaIcons.FaHome size={40} />
                            <div>{props.t('Home')}</div>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to='/menu'>
                            <GiIcons.GiTeapot size={50} />
                            <div>{props.t('Menu')}</div>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to='/robot'>
                            <FaIcons.FaRobot size={50} />
                            <div>{props.t('Robot')}</div>
                        </Link>
                    </li>

                    <li className="nav-text">
                        <Link to='/arcanum'>
                            <BsIcons.BsGearWideConnected size={50} />
                            <div>{props.t('Arcanum')}</div>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to='/journey'>
                            <GiIcons.GiRabbitHead size={80} />
                            <div>{props.t('Journey')}</div>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to='/characters'>
                            <HeroIcons.HiUsers size={46} />
                            <div>{props.t('Characters')}</div>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to='/vaniercollege'>
                            <Io5Icons.IoSchoolSharp size={40} />
                            <div>{props.t('VC')}</div>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to='/jackpot'>
                            <GiIcons.GiHoneypot size={50} />
                            <div>{props.t('Jackpot')}</div>
                        </Link>
                    </li>
                    <li className="nav-text" id='gallery' style={{display: `none`}}>
                        <Link to='/gallery'>
                            <GrIcons.GrGallery style={{filter: `invert(1)`}} size={40} />
                            <div>{props.t('Gallery')}</div>
                        </Link>
                    </li>
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    );
}

export default withNamespaces()(Navbar);
