import React from 'react';
import { Link } from 'react-router-dom'


import '../styles/pages/congratulationTwo.css'

export default function CongratulationsTwo(){
    return(
        <div id='congratulation-page'>
            <div id='content-wrapper'>
                <h1>PARABÉNS!!!!</h1>
                <p>Você completou o desafio e ganhou <strong> 500 pontos </strong></p>
            </div>

            <Link to=''>Gerar Certificado</Link>
            <Link to='' id='goToVitrine'>Ir para a Vitrine</Link>

        </div>
    )
}