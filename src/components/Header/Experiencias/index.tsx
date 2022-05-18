import { ReactNode } from 'react';
import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';

import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="05 Anos" description=" de experiência" />
      <section>
        <ExperienciaItem
        year="2022"
        title="Desenvolvedor Back End"
        description='Desenvolvimento de aplicações web e mobile, como:'
        />
        <ExperienciaItem
        year="2022"
        title="Desenvolvedor Back End"
        description="Desenvolvimento de aplicações web e mobile, como:"
        />
        <ExperienciaItem
        year="2022"
        title="Desenvolvedor Back End"
        description="Desenvolvimento de aplicações web e mobile, como:"
        />
        <ExperienciaItem
        year="2022"
        title="Desenvolvedor Back End"
        description="Desenvolvimento de aplicações web e mobile, como:"/>
      </section>
    </Container>
  );
};

export default Experiencias;
