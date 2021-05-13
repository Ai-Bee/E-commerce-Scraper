import React from 'react';
import '../stylesheets/navbar.scss'
import {useState} from 'react'
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'

function Nav(props) {
    let location = useLocation()
    let [lightModeOn, setLightMood] = useState(true);
    let screenModeImages = [
        {
            src:'./moon.png',
            alt: 'Dark mode'
        },
        {
            src:'./sun.png',
            alt: 'Light Mode'
        }
         ]

    function handleMoodSwitch(e) {
        e.preventDefault()
        setLightMood(lightModeOn = !lightModeOn)
        props.getUserMood(lightModeOn)
    }

    let scroller = (e) => {
        e.preventDefault()
        let destination = e.target.alt.split(' ')[0]
        const anchor = document.querySelector(`#${destination}`)
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return (
        <div className={`App-header sticky-top ${lightModeOn? 'light': 'dark'}`}>
            <header>
                <p className='pt-3'>
                Product Hunt
                </p>
                <nav role="navigation" className="rightImgs pt-3">
                    <ul>
                        <li className={`logos px-3 ${location.pathname=='/home'?'hiding':'showing'}`} onClick={scroller}> <img src="./Jiji_logo.png" alt="Jiji Logo"/></li>
                        <li onClick={scroller} className={`logos px-3 ${location.pathname=='/home'?'hiding':'showing'}`}> <img src="./Aliexpress-logo-full.png" alt="Aliexpress Logo"/></li>
                        <li onClick={scroller} className={`logos px-3 ${location.pathname=='/home'?'hiding':'showing'}`}> <img src="./Amazon-logo-full.png" alt="Amazon Logo"/></li>
                        <li onClick={scroller} className={`logos px-3 ${location.pathname=='/home'?'hiding':'showing'}`}> <img src="./kongaLogo.webp" alt="Konga Logo"/></li>
                        <li onClick={scroller} className={`logos mx-3 ${location.pathname=='/home'?'hiding':'showing'}`}> <img src="./jumia-logo-full.png" alt="Jumia Logo"/></li>
                        <li> 
                            <img 
                            onClick={handleMoodSwitch}
                            title={`Switch to ${lightModeOn?screenModeImages[0].alt:screenModeImages[1].alt}`}
                            src={lightModeOn?screenModeImages[0].src:screenModeImages[1].src} 
                            alt={lightModeOn?screenModeImages[0].alt:screenModeImages[1].alt}/>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
  }
  
  Nav.propTypes = {
    getUserMood: PropTypes.func
  }

  export default Nav;