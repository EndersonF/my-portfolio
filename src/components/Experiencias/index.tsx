import { ReactNode } from 'react';
import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';

import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="02 Anos" description=" de experiência" />
      <section>
        <ExperienciaItem
          year="2022"
          title="Desenvolvedor Blockchain"
          description="Trabalhei como desenvolvedor Blockchain na empresa Compass. Durante o período de trabalho, usei algumas linguagens de programação,
        como, JavScript, NodeJS, Blockchain, SQL, NoSQL, Git e Github. Também trabalhei com metodologias ágeis Scrum e Kanban."
        />
        <ExperienciaItem
          year="2020"
          title="Estagiário de Tecnologia da Informação"
          description="Trabalhei como estagiário de TI na empresa Unimed. 
        Durante o período de trabalho, prestava serviços de TI, como instalação de equipamentos, suporte técnico, suporte aos funcionários, etc."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
