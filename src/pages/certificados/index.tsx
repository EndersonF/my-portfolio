import Head from 'next/head';
import StyledModalImage from './StyledModalImage';
import Header from '../../components/Header';
import { CertificadosStyles } from '../../styles/CertificadosStyles';

export default function Certificados() {
  return (
    <CertificadosStyles>
      <Head>
        <title>Certificados | Enderson Frazão</title>
        <meta
          name="description"
          content="Aqui você pode conferir alguns dos meus certificados dos meus cursos."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Aqui você pode conferir alguns dos meus certificados dos meus cursos."
        />
      </Head>
      <Header />
      <main className="container">
        <div className="overlay">
          <StyledModalImage
            small="https://i.ibb.co/z244JKR/Enderson-git-1.png"
            large="https://i.ibb.co/z244JKR/Enderson-git-1.png"
            alt="Git e Github: Controle e compartilhe seu código"
          />
        </div>
        <StyledModalImage
          small="https://i.ibb.co/k1yJhDt/Enderson-Kanban-1.png"
          large="https://i.ibb.co/k1yJhDt/Enderson-Kanban-1.png"
          alt="Kanban: Fundamentos essenciais"
        />
        <StyledModalImage
          small="https://i.ibb.co/qr316jr/Enderson-scrum-1.png"
          large="https://i.ibb.co/qr316jr/Enderson-scrum-1.png"
          alt="Scrum: Agilidade em seu projeto"
        />
        <StyledModalImage
          small="https://i.ibb.co/16BYmZJ/Enderson-formacao-js-1.png"
          large="https://i.ibb.co/16BYmZJ/Enderson-formacao-js-1.png"
          alt="JavaScript para back-end"
        />
        <StyledModalImage
          small="https://i.ibb.co/C7t6Rf3/Enderson-Fraz-o-Barreto-Curso-Alura-1.png"
          large="https://i.ibb.co/C7t6Rf3/Enderson-Fraz-o-Barreto-Curso-Alura-1.png"
          alt="NodeJS: Streaming de dados e repositório"
        />
        <StyledModalImage
          small="https://i.ibb.co/BzGP1Rz/Enderson-rest-node-1.png"
          large="https://i.ibb.co/BzGP1Rz/Enderson-rest-node-1.png"
          alt="REST com NodeJS: API com Express e MySQL"
        />
        <StyledModalImage
          small="https://i.ibb.co/cvj0JkF/Enderson-web-1.png"
          large="https://i.ibb.co/cvj0JkF/Enderson-web-1.png"
          alt="HTTP: Entendendo a web por baixo dos panos"
        />
        <StyledModalImage
          small="https://udemy-certificate.s3.amazonaws.com/image/UC-b2638df6-71f1-4074-a3da-cb9a37a0980b.jpg"
          large="https://udemy-certificate.s3.amazonaws.com/image/UC-b2638df6-71f1-4074-a3da-cb9a37a0980b.jpg"
          alt="Curso web moderno com JavaScript 2021"
        />
        <StyledModalImage
          small="https://i.ibb.co/qgY3DGS/Cert-AWS-1.png"
          large="https://i.ibb.co/qgY3DGS/Cert-AWS-1.png"
          alt="Computação em Nuvem | AWS"
        />
        <StyledModalImage
          small="https://i.ibb.co/2d8RthH/flexblox.jpg"
          large="https://i.ibb.co/2d8RthH/flexblox.jpg"
          alt="CSS Flexbox"
        />
        <StyledModalImage
          small="https://i.ibb.co/PZmJqdG/certificate-enderson-origamid-cssgrid-page-0001.jpg"
          large="https://i.ibb.co/PZmJqdG/certificate-enderson-origamid-cssgrid-page-0001.jpg"
          alt="CSS Grid Layout"
        />
        <StyledModalImage
          small="https://i.ibb.co/88DqyWG/javascript-origamid-1.png"
          large="https://i.ibb.co/88DqyWG/javascript-origamid-1.png"
          alt="JavaScript Completo ES6"
        />
        <StyledModalImage
          small="https://i.ibb.co/vZxS8W6/origamid-html-1.png"
          large="https://i.ibb.co/vZxS8W6/origamid-html-1.png"
          alt="HTML e CSS para iniciantes"
        />
        <StyledModalImage
          small="https://i.ibb.co/8cWfgjk/react-origamid-1.png"
          large="https://i.ibb.co/8cWfgjk/react-origamid-1.png"
          alt="React Completo"
        />
      </main>
    </CertificadosStyles>
  );
}
