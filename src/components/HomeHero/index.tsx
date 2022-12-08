import Typical from 'react-typical';
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/perfil2.jpeg';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img className="perfil" src={picture} alt="Minha Foto" />
      <div>
        <TextContainer>
          <div>
            <Typical
              loop={1}
              wrapper="h1"
              steps={['', 2000, 'Olá, me chamo Enderson 🧑🏿‍💻', 2000]}
            />
          </div>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Infos </span>
            {'\u007B'}
            <div>
              Nome: <span className="blue">"Enderson",</span>
            </div>
            <div>
              Sobrenome: <span className="blue">"Frazão"</span>
              {'\u007D'}
            </div>
            <span className="purple">Graduação </span>
            {'\u007B'}
            <div>
              Curso:{' '}
              <span className="blue">
                "Análise e Desenvolvimento de Sistemas",
              </span>
            </div>
            <div>
              Instituição:{' '}
              <span className="blue">"Instituto Federal de Rondônia"</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Cargo </span>
            {'\u007B'}
            <div>
              Função: <span className="blue">"Desenvolvedor Front-end",</span>
            </div>
            <div>
              Status: <span className="blue">"Buscando uma oportunidade"</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
