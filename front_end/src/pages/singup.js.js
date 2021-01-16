import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/pages/singup.css'

export default function SingUp(){
    return(
        <div id='singup-page'>
            
            <header><h1>Casulo</h1></header>

            <main>
                <input type='text' placeholder='Nome'/>
                <input type='text' placeholder='E-mail' />
                <input type='password' placeholder='Senha' />
                <input type='password' placeholder='Repetir Senha' />
                <Link to='perguntas'>Entrar</Link>
                <Link to=''>Login </Link>
            </main>

        </div>
    )
}