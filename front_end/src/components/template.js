import React from 'react';

import '../styles/components/template.css'

export default function Template({ name, children }){
    return(
        <div id='template'>
            <h1>{name}</h1>
            {children}
        </div>
    )
}