import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/pages/login.css'

export default function Login(){
    return(
        <div id='loging-page'>
            <main>
                <input type='text' placeholder='E-mail' />
                <input type='text'  placeholder='Senha' />
                <Link to='' >Entrar</Link>
            </main>

        </div>
    )
}