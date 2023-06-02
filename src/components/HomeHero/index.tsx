import Image from 'next/image';
import React from 'react';
import Typical from 'react-typical';
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <div className="Fotoperfil">
        <Image
          src="/assets/enderson.webp"
          alt="enderson"
          width={550}
          height={550}
          objectFit="cover"
          priority
          quality={80}
          sizes="(max-width: 768px) 100vw, 550px"
        />
      </div>
      <div>
        <TextContainer>
          <Typical
            loop={1}
            wrapper="h1"
            steps={[2500, 'Hey, me chamo Enderson', 2500]}
          />
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Infos</span>
            {'\u007B'}
            <div>
              Nome: <span className="blue">&quot;Enderson&quot;,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">&quot;Frazão&quot;</span>
              {'\u007D'}
            </div>
            <span className="purple">Graduação</span>
            {'\u007B'}
            <div>
              Curso:{' '}
              <span className="blue">
                &quot;Análise e Desenvolvimento de Sistemas&quot;,
              </span>
            </div>
            <div>
              Instituição:{' '}
              <span className="blue">
                &quot;Instituto Federal de Rondônia&quot;
              </span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Cargo</span>
            {'\u007B'}
            <div>
              Função:{' '}
              <span className="blue">&quot;Desenvolvedor Front-end&quot;,</span>
            </div>
            <div>
              Status:{' '}
              <span className="blue">&quot;Fazendo acontecer&quot;</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
