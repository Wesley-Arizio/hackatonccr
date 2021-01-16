import React from 'react'

import Logo from '../assets/logo.svg'

import '../styles/pages/splash.css'

export default function Splash(){
    return(
        <div id='landing-page'>
            oi
            <div id='content-wrapper'>
            <h1>
                CASULO
            </h1>
            </div>
            <img src={Logo} alt='Logo' />
        </div>
    )
}