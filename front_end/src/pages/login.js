import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/pages/login.css'

export default function Login(){
    return(
        <div id='login-page'>
            <header>
                <h1>Casulo</h1>
            </header>
            <main>
                <input type='text' placeholder='E-mail' />
                <input type='password'  placeholder='Senha' />
                <Link to='perguntas' >Entrar</Link>
            </main>

            <Link to='cadastro' > Cadastrar </Link>


        </div>
    )
}