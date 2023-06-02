import Head from 'next/head';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import ImageModal from './StyledModalImage';
import Header from '../../components/Header';
import { CertificadosStyles } from '../../styles/CertificadosStyles';

type ImageProps = {
  id: string;
  small: string;
  large: string;
  alt: string;
  loaded?: boolean;
};

const images: ImageProps[] = [
  {
    id: uuidv4(),
    small: '/images/Enderson-git-1.webp',
    large: '/images/Enderson-git-1.webp',
    alt: 'Git e Github: Controle e compartilhe seu código'
  },
  {
    id: uuidv4(),
    small: 'images/Enderson-Kanban-1.webp',
    large: 'images/Enderson-Kanban-1.webp',
    alt: 'Kanban: Fundamentos essenciais'
  },
  {
    id: uuidv4(),
    small: 'images/Enderson-scrum-1.webp',
    large: 'images/Enderson-scrum-1.webp',
    alt: 'Scrum: Agilidade em seu projeto'
  },
  {
    id: uuidv4(),
    small: 'images/Enderson-formacao-js-1.webp',
    large: 'images/Enderson-formacao-js-1.webp',
    alt: 'JavaScript para back-end'
  },
  {
    id: uuidv4(),
    small: 'images/Enderson-nodejs.webp',
    large: 'images/Enderson-nodejs.webp',
    alt: 'NodeJS: Streaming de dados e repositório'
  },
  {
    id: uuidv4(),
    small: 'images/Enderson-rest-node-1.webp',
    large: 'images/Enderson-rest-node-1.webp',
    alt: 'REST com NodeJS: API com Express e MySQL'
  },
  {
    id: uuidv4(),
    small: 'images/Enderson-web-1.webp',
    large: 'images/Enderson-web-1.webp',
    alt: 'HTTP: Entendendo a web por baixo dos panos'
  },
  {
    id: uuidv4(),
    small: 'images/Enderson-js-udemy.webp',
    large: 'images/Enderson-js-udemy.webp',
    alt: 'Curso Web Moderno Completo com JavaScript 2021 + Projetos'
  },
  {
    id: uuidv4(),
    small: 'images/flexblox.webp',
    large: 'images/flexblox.webp',
    alt: 'CSS Flexbox'
  },
  {
    id: uuidv4(),
    small: 'images/enderson-css-grid.webp',
    large: 'images/enderson-css-grid.webp',
    alt: 'CSS Grid Layout'
  },
  {
    id: uuidv4(),
    small: 'images/javascript-origamid-1.webp',
    large: 'images/javascript-origamid-1.webp',
    alt: 'JavaScript Completo ES6+'
  },
  {
    id: uuidv4(),
    small: 'images/origamid-html-1.webp',
    large: 'images/origamid-html-1.webp',
    alt: 'HTML5 e CSS para iniciantes'
  },
  {
    id: uuidv4(),
    small: 'images/react-completo.webp',
    large: 'images/react-completo.webp',
    alt: 'React Completo'
  },
  {
    id: uuidv4(),
    small: 'images/endersonwp.webp',
    large: 'images/endersonwp.webp',
    alt: 'WordPress como CMS'
  }
];

export default function Certificados() {
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);

  return (
    <CertificadosStyles>
      <Head>
        <title>Certificados | Enderson Frazão</title>
        <meta
          name="description"
          content="Aqui você pode conferir alguns dos meus certificados dos meus cursos."
        />
        <meta property="og:image" content="https://i.imgur.com/Bl4WlDz.png" />
        <meta property="og:image:secure_url" content="assets/ogimage.png" />
        <meta name="twitter:image" content="assets/ogimage.png" />
        <meta name="twitter:image:src" content="assets/ogimage.png" />
        <meta
          property="og:description"
          content="Aqui você pode conferir alguns dos meus certificados dos meus cursos."
        />
      </Head>
      <Header />
      <main className="container">
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
        {images.map(image => (
          <ImageModal
            key={image.id}
            {...image}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.small}
              srcSet={`${image.small} 1x, ${image.large} 2x`}
              alt={image.alt}
              loading={image.loaded ? 'eager' : 'lazy'}
              onLoad={() => {
                image.loaded = true;
              }}
            />
          </ImageModal>
        ))}
      </main>
    </CertificadosStyles>
  );
}
