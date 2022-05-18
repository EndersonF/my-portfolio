import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import ProjetoItem from './ProjetoItem';
import Link from 'next/link';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        <ProjetoItem
        img="https://images.unsplash.com/photo-1652433062476-43e6dd7753b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Projeto 01"
        type="Website"
        slug="teste"
         />
        <ProjetoItem
        img="https://images.unsplash.com/photo-1652433062476-43e6dd7753b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Projeto 01"
        type="Website"
        slug="teste"
        />
        <ProjetoItem
        img="https://images.unsplash.com/photo-1652433062476-43e6dd7753b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Projeto 01"
        type="Website"
        slug="teste"
         />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
};

export default Projetos;
