// import Link from 'next/link';
import { Container } from './styles';
interface CertficadoItemProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

function CertficadoItem({ title, type, imgUrl, slug  }: CertficadoItemProps) {
  return (
    <Container imgUrl= {imgUrl}>
        <a>
          <div className="overlay"/>
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
    </Container>
  );
};

export default CertficadoItem;
