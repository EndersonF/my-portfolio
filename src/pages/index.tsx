import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';
import { getPrismicClient } from '../services/prismic';
import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import Projetos from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';
import FormContato from '../components/FormContato';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';
import Sobre from '../components/Sobre';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  link: string;
  description: string;
  thumbnail: string;
}

interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <HomeContainer>
      <Head>
        <title>Portfólio // Enderson Frazão</title>
        <meta
          name="description"
          content="Sou um desenvolvedor front-end e sempre estou aprendendo algo novo. Aqui apresento meus projetos e experiências!"
        />
        <meta name="author" content="Enderson Frazão" />
        <meta property="og:title" content="Portfólio // Enderson Frazão" />
        <meta property="og:url" content="https://endersonf.tech" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://endersonf.tech/assets/ogimage.png"
        />

        <meta
          name="twitter:image"
          content="https://endersonf.tech/assets/ogimage.png"
        />
        <meta
          property="og:description"
          content="Portfólio // Enderson Frazão"
        />
      </Head>
      <Header />
      <main className="container overflow-hidden">
        <HomeHero />
        <Sobre />
        <Experiencias />
        <Projetos projetos={projetos} />
        <Conhecimentos />
        <FormContato />
      </main>
      <Footer />
    </HomeContainer>
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
