import React from 'react';
import Template from '../../components/template';

import '../../styles/pages/questions/questionOne.css'

export default function QuestionOne(){
    return(
        <div id='question-one-page'>
            <header>
                <h1>1</h1>
                <h2>Quem é você</h2>
            </header>
            
            <Template name='Desafio A'> 
                <p>Tire uma selfie e escreva seu nome e como gosta de ser chamado (apelido)</p>
            </Template>
        </div>
    )
}