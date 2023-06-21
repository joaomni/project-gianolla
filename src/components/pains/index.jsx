import React from 'react';

import './style.scss';

import Section from '../shared/section'

import { BsXCircleFill } from "react-icons/bs";

const Pain = () => {
  return (
    <Section id="pains" title="Chegou a hora de mudar" background="light">
        <div className="pain-content">

          <div className="text">
            <strong>
              Muitos profissionais sentem-se inseguros na hora de realizar uma Avaliação Física correta!
              <br />
              Então se você:
            </strong>
          </div>

          <div className="pains">
            <ul>
              <li><BsXCircleFill size={24} color="red"/> Não tem acesso a um profissional de qualidade em sua cidade</li>
              <li>Não tem tempo devido uma rotina muito corrida para passar por uma consulta presencial</li>
              <li>Não se sente a vontade em passar em consulta presencial ou online</li>
              <li>Não conseguiu resultado com nenhuma dieta milagrosa</li>
            </ul>
          </div>
        </div>
    </Section>
  );
}

export default Pain;
