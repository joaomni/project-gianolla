import React from 'react';

import './style.scss';

import Section from '../shared/section'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const Pain = () => {
  return (
    <Section id="pains" title="Chegou a hora de mudar" background="light">
        <div className="pain-content">

          <div className="text">
            <strong>
              Foi entendendo e, mais do que isso, vivendo o dia a dia do consultório, que pude
              perceber a real necessidade de mercado que muitos dos meus pacientes se
              queixavam. Com isso, as reais lacunas que precisam ser preenchidas ficaram muito
              claras para mim.
              <br />
              Veja se você consegue se perceber nessas situações:
            </strong>
          </div>

          <div className="pains">
            <ul>
              <li><FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color: "#e0bb8d",}} /> Não tem acesso a um profissional de qualidade em sua cidade</li>
              <li><FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color: "#e0bb8d",}} /> Não tem tempo devido uma rotina muito corrida para passar por uma consulta presencial</li>
              <li><FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color: "#e0bb8d",}} /> Não se sente a vontade em passar em consulta presencial ou online</li>
              <li><FontAwesomeIcon icon={faCircleXmark} size="xl" style={{color: "#e0bb8d",}} /> Não conseguiu resultado com nenhuma dieta milagrosa</li>
            </ul>
          </div>
        </div>
    </Section>
  );
}

export default Pain;
