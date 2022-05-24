import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import ProjetoItem from './ProjetoItem';
import Link from 'next/link';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  link: string;
  description: string;
  thumbnail: string;
}

interface ProjetosProps {
  projetos: IProjeto[];
}

function Projetos({ projetos }: ProjetosProps) {
  console.log(projetos);
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        {projetos.slice(0,3).map(projeto => (
          <ProjetoItem
          key={projeto.slug}
            img={projeto.thumbnail}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
