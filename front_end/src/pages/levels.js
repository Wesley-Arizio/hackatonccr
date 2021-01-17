import React from 'react';

import Level from '../components/level';

import '../styles/pages/levels.css'

export default function Levels(){
    return(
        <div id='levels-page' >
            <Level number = '1' isOpen goTo='question' />
            <div id='vertical-line'></div>
            <Level number = '2' goTo='questionTwo'  />
            <Level number = '3' goTo='questionThree' />
            <Level number = '4' goTo='questionFour' />
            <Level number = '5' goTo='questionFive' />
        </ div>
    )
}