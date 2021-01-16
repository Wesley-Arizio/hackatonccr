import React from 'react';

import Level from '../components/level';

import '../styles/pages/levels.css'

export default function Levels(){
    return(
        <div id='levels-page' >
            <Level number = '1' isOpen/>
            <div id='vertical-line'></div>
            <Level number = '2' />
            <Level number = '3' />
            <Level number = '4' />
            <Level number = '5' />
            <Level number = '6' />
            <Level number = '7' />
        </ div>
    )
}