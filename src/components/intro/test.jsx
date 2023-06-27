import React from 'react';

import './style.scss';

const Intro = () => {
  return (
    <div className='intro-section' id="home">
      <div className="vector-bg" id="parallax"></div>

      <div className="headline-content">
        <h1>Você pretende perder Peso?</h1>
        <h1>Melhorar a sua qualidade de Vida?</h1>

        <br/>
        <p>A Clínica Pizzini através do Profissional Fábio Gianolla (Nutricionista, 
          Professor Universitário e Mestre em Educação Física) passa a oferecer 
          Planos Alimentares Personalizados e a Elaboração de treinos completos 100% online.</p>
        
        <div className="vsl">
          <iframe allowfullscreen="" title="Player de Vídeo youtube" src="https://www.youtube.com/embed/RF09p7lqXbI?feature=oembed&amp;color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1"></iframe>
        </div>

        <div className="pay">
          <button type="submit">SIM, QUERO MEU PLANO AGORA!</button>
        </div>
      
      </div>

    </div>
  );
}

export default Intro;
