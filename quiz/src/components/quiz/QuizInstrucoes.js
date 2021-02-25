import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import{Helmet} from 'react-helmet';


const QuizInstrucoes = () => (
  <Fragment>
        <Helmet><title>Instruções do Quiz</title></Helmet>
        <div className="instructions container">
        <h1>Como jogar</h1>
        <p>Certifique-se de ler este guia do início ao fim.</p>
        <ul  className="browser-default" id="main-list"></ul>
        <li>O jogo tem a duração de 15 minutos e termina assim que o seu tempo terminar.</li>
        <li>O jogo consiste em 15 questões.</li>
        <li>Cada pergunta contém 4 opções.</li>
        <li>Selecione a opção que melhor responde à pergunta clicando (ou selecionando).</li>
        <li>Cada jogo tem 2 vidas.</li>
        <ul id="sublist">
        <li>2 chances de 50-50.</li>

        </ul>
</div>



</Fragment>

);

export default QuizInstrucoes;


