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
          description="Trabalhei como estagiário em Blockchain na empresa Compass UOL. Durante o período de trabalho, desenvolvi APIs na Blockchain utilizando as linguagens JavaScript e Python, além do ambiente de execução Node.js, e os bancos de dados MySQL e MongoDB. Também utilizei o GIT para versionamento de códigos."
        />
        <ExperienciaItem
          year="2020"
          title="Estagiário de Tecnologia da Informação"
          description="Como estagiário de TI na Unimed Porto Velho, prestei serviços diversos, tais como instalação de equipamentos, suporte técnico aos usuários, suporte aos funcionários e levantamento de requisitos para aplicativos móveis."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
