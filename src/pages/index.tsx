import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';
import {HomeContainer} from '../styles/HomeStyles';
import Header from "../components/Header";
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import Projetos from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';
import FormContato from '../components/FormContato';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';

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
    Aos.init({duration: 2000});
  }, []);
  return (
    <HomeContainer>
       <Head>
      <title>Portfólio | Enderson</title>
      <meta
          name="description"
          content="Sou um desenvolvedor Front-end e Back-end e aqui apresento meus projetos e experiências."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e Back-end e aqui apresento meus projetos e experiências."
        />
        </Head>
      <Header />
      <main className = "container">
        <HomeHero/>
        <Experiencias/>  
        <Projetos projetos= {projetos}/>
        <Conhecimentos/>
        <FormContato/>
        </main>
        <Footer/>      
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
