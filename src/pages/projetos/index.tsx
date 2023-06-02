import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoDois';
import { ProjetosContainer } from '../../styles/ProjetosStyles';
import { getPrismicClient } from '../../services/prismic';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projetos: IProjeto[];
}

export default function Projetos({ projetos }: ProjetoProps) {
  return (
    <ProjetosContainer>
      <Head>
        <title>Projetos | Enderson Frazão</title>
        <meta
          name="description"
          content="Aqui você pode conferir alguns dos meus projetos pessoais e profissionais."
        />
        <meta property="og:title" content="Projetos | Enderson Frazão" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/Bl4WlDz.png" />
        <meta property="og:image:secure_url" content="assets/ogimage.png" />
        <meta name="twitter:image" content="assets/ogimage.png" />
        <meta name="twitter:image:src" content="assets/ogimage.png" />
        <meta
          property="og:description"
          content="Aqui você pode conferir alguns dos meus projetos pessoais e profissionais."
        />
      </Head>
      <Header />
      <main className="container">
        {projetos.map(projeto => (
          <ProjetoItem
            key={projeto.slug}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
            imgUrl={projeto.thumbnail}
          />
        ))}
      </main>
    </ProjetosContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};
