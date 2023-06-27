import React from 'react';

import './style.scss';

import Section from '../shared/section'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons'

import { CiApple } from "react-icons/ci";

const Intro = () => {
  return (
    <>
      <div className='intro-section' id="home">
        <div className="vector-bg" id="parallax"></div>

        <div className="headline-content">

          <div className="content">
            <div className='text'>
              <h6>
                A SUA MELHOR FORMA
                <br />
                NUNCA ESTEVE TÃO PERTO!
              </h6>
            </div>

            <div className='start'>
              <a>COMECE AGORA</a>
            </div>
          </div>

        </div>

      </div>

      <Section id="pains" title="TÁ DIFÍCIL CONQUISTAR" background="gray">
        <div className="vsl-content">
          <div className="text">
            <h6>O CORPO DOS SEUS SONHOS?</h6>
          </div>

          <div className="divider">
              <div>
                <hr />
                  <span><CiApple color='black' size={32}/></span>
                <hr />
              </div>
          </div>

          <div className="box-vsl">

            <div className="info">
              <p>
                A partir de hoje eu estarei te ajudando a chegar lá.
              </p>

              <p>
                Deixa eu me apresentar, meu nome é Fábio Gianolla, <strong>sou nutricionista e mestre em Educação Física.</strong> Autor de vários livros voltados para o universo da musculação, além de <strong>‘Palestrante Black Skull’</strong>, professor universitário há 26 anos e, atuo na Clínica Pizzini com <strong>atendimento nutricional personalizado online e presencial</strong>.
              </p>

              <p>
                Estou há mais de 10 anos no mercado e por meio dos meus planos alimentares, <strong>já ajudei mais de 1000 pacientes a melhorarem sua qualidade de vida, perder peso de verdade</strong> e conquistar a tão almejada vida/forma saudável.
              </p>

              <p>
                Ficou curioso para saber como tudo isso é possível? Adquira já o seu <strong>Plano Alimentar Personalizado</strong> e foque de uma vez por todas na perda de peso de verdade!
              </p>

              <strong style={{fontWeight: 'bold', color: 'black'}}>Junte-se a mais de 1.000 alunos!</strong>
            </div>

            <div className="video">
              <iframe class="elementor-video-iframe" allowfullscreen="" title="Player de Vídeo youtube" src="https://www.youtube.com/embed/RF09p7lqXbI?feature=oembed&amp;color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1"></iframe>
            </div>

          </div>

        </div>
      </Section>
    </>
  );
}

export default Intro;
