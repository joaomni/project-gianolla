import React from 'react';

import './style.scss';

import Section from '../shared/section'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const Pain = () => {
  return (
    <Section id="pains" title="" background="light">
        <div className="pain-content">

          <div className="text">
            <h1>
              Sem dietas malucas, sem restrição à toa e sem estresse. 
              Estamos aqui para descomplicar a sua rotina e desbloquear 
              de vez <span>seu emagrecimento</span>.
            </h1>
          </div>

          <div className="pains">
            <ul>
              <li><FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color: "#bc9458",}} /> Não tem acesso a um profissional de qualidade em sua cidade</li>
              <li><FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color: "#bc9458",}} /> Não tem tempo devido uma rotina muito corrida para passar por uma consulta presencial</li>
              <li><FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color: "#bc9458",}} /> Não se sente a vontade em passar em consulta presencial ou online</li>
              <li><FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color: "#bc9458",}} /> Não conseguiu resultado com nenhuma dieta milagrosa</li>
            </ul>
          </div>
        </div>
    </Section>
  );
}

export default Pain;
