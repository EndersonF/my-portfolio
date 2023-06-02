import Image from 'next/image';
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
      <Link href={`/projetos/${slug}`} as={`/projetos/${slug}`}>
        <a>
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
          <div className="image-container">
            <Image src={imgUrl} alt={title} layout="fill" objectFit="cover" />
            <div className="overlay" />
          </div>
        </a>
      </Link>
    </Container>
  );
}

export default ProjetoItem;
