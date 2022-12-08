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
          description="Trabalhei como estagiário em Blockchain na empresa Compass UOL. Durante o período de trabalho, desenvolvi APIs na Blockchain utilizando as linguagens JavaScript, Python e o ambiente de execução Node.js e os banco de dados MySQL e MongoDB. Também utilizei GIT para versionamento de códigos."
        />
        <ExperienciaItem
          year="2020"
          title="Estagiário de Tecnologia da Informação"
          description="Trabalhei como estagiário de TI na empresa Unimed Porto Velho. 
        Durante o período de trabalho, prestava serviços de TI, como instalação de equipamentos, suporte técnico, suporte aos funcionários e levantamento de requisitos para aplicação mobile."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
