import CertficadoItem from '../../components/CertficadoItem';
import Header from '../../components/Header';
import { CertificadosStyles } from '../../styles/CertificadosStyles';

export default function Certificados() {
  return (
    <CertificadosStyles>
      <Header />
      <main className="container">
        <CertficadoItem
          title=""
          type=""
          imgUrl="https://i.ibb.co/J7b7pKG/Enderson-Fraz-o-Barreto-Curso-Alura-1.jpg"
          slug="nodejs"
        />
        <CertficadoItem
          title=""
          type=""
          imgUrl="https://i.ibb.co/RTtNkXY/Enderson-git-page-0001.jpg"
          slug="git"
        />
        <CertficadoItem
          title=""
          type=""
          imgUrl="https://i.ibb.co/rv4Xw9K/Enderson-Kanban-page-0001.jpg"
          slug="kanban"
        />
        <CertficadoItem
          title=""
          type=""
          imgUrl="https://i.ibb.co/NFHR2PS/Enderson-formacao-js-page-0001.jpg"
          slug="javascript-backend"
        />
        <CertficadoItem
          title=""
          type=""
          imgUrl="https://i.ibb.co/g7ZJ7K4/Enderson-rest-node-page-0001.jpg"
          slug="rest"
        />
        <CertficadoItem
          title=""
          type=""
          imgUrl="https://i.ibb.co/Yb7VxhP/Enderson-scrum-page-0001.jpg"
          slug="scrum"
        />
        <CertficadoItem
          title=""
          type=""
          imgUrl="https://i.ibb.co/gD9Nskp/Enderson-web-page-0001.jpg"
          slug="http"
        />
        <CertficadoItem
          title=""
          type=""
          imgUrl="https://i.ibb.co/jZgkxyh/certificado-web-moderno-js.jpg"
          slug="web-moderno"
        />
        <CertficadoItem
          title=""
          type=""
          imgUrl="https://i.ibb.co/rcyX5h8/JS-Origamid-novomodelo-page-0001.jpg"
          slug="javascript-es6"
        />
        <CertficadoItem
          title=""
          type=""
          imgUrl="https://i.ibb.co/2ZM66LB/certificate-enderson-origamid-react-page-0001.jpg"
          slug="react"
        />
        <CertficadoItem
          title=""
          type=""
          imgUrl="https://i.ibb.co/KqB8Znf/certificate-enderson-origamid-htmlandcss-pages-to-jpg-0001.jpg"
          slug="html-css"
        />
        <CertficadoItem
          title=""
          type=""
          imgUrl="https://i.ibb.co/6BcGTbQ/certificate-enderson-origamid-cssgrid-page-0001.jpg"
          slug="css-grid"
        />
      </main>
    </CertificadosStyles>
  );
}
