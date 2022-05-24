import CertficadoItem from '../../components/CertficadoItem';
import Header from '../../components/Header';
import { CertificadosStyles} from '../../styles/CertificadosStyles'

export default function Certificados() {
  return (
    <CertificadosStyles>
      <Header />
      <main className="container">
        <CertficadoItem
          title="Certificado 01"
          type="Node.JS: Streaming de dados"
          imgUrl="https://i.ibb.co/J7b7pKG/Enderson-Fraz-o-Barreto-Curso-Alura-1.jpg"
          slug="nodejs"
        />
        <CertficadoItem
          title="Certificado 02"
          type="Git e Github"
          imgUrl="https://i.ibb.co/RTtNkXY/Enderson-git-page-0001.jpg"
          slug="git"
        />
        <CertficadoItem
          title="Certificado 03"
          type="Kanban"
          imgUrl="https://i.ibb.co/rv4Xw9K/Enderson-Kanban-page-0001.jpg"
          slug="kanban"
        />
        <CertficadoItem
          title="Certificado 04"
          type="JavaScript para Back-End"
          imgUrl="https://i.ibb.co/NFHR2PS/Enderson-formacao-js-page-0001.jpg"
          slug="javascript"
        />
        <CertficadoItem
          title="Certificado 05"
          type="Rest com Node.JS"
          imgUrl="https://i.ibb.co/g7ZJ7K4/Enderson-rest-node-page-0001.jpg"
          slug="rest"
        />
        <CertficadoItem
          title="Certificado 06"
          type="Scrum"
          imgUrl="https://i.ibb.co/Yb7VxhP/Enderson-scrum-page-0001.jpg"
          slug="scrum"
        />
        <CertficadoItem
          title="Certificado 07"
          type="HTTP e WEB"
          imgUrl="https://i.ibb.co/gD9Nskp/Enderson-web-page-0001.jpg"
          slug="http"
        />
          <CertficadoItem
          title="Certificado 08"
          type="JavaScript+Projetos"
          imgUrl="https://i.ibb.co/jZgkxyh/certificado-web-moderno-js.jpg"
          slug="web-moderno"
        />
      </main>
    </CertificadosStyles>
  );
}
