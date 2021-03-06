import Link from 'next/link';
import { Container } from './styles';

interface ProjetoDoisProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

function ProjetoItem({ title, type, imgUrl, slug }: ProjetoDoisProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projetos/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}

export default ProjetoItem;