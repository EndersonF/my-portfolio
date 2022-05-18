import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../../assets/arte-removebg-bl.png';



function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha Foto" />
      <div>
        <TextContainer>
          <div className='animacao-caixa'>
          <h1>Olá,</h1>
          <h2>Me chamo Enderson! :)</h2>
          </div>
          </TextContainer>
          <InfosContainer>
            <CodeItem>
              {/* <span className="comment">//Minha Apresentação</span> */}
              <span className="purple">Infos </span>{'\u007B'}
              <div>
                Nome: <span className="blue">"Enderson",</span>
              </div>
              <div>
                Sobrenome: <span className="blue">"Barreto" </span>
                {'\u007D'}
              </div>
              <span className="purple">Graduação </span>{'\u007B'}
              <div>
                Curso: <span className="blue">"Análise e Desenvolvimento de Sistemas",</span>
              </div>
              <div>
                Instituição: <span className="blue">"Instituto Federal de Rondônia"</span>
              </div>
              {'\u007D'}
            </CodeItem>
            <CodeItem>
              <span className="purple">Cargo </span>{'\u007B'}
              <div>
                Função: <span className="blue">"Dev Front-end e Back-end",</span>
              </div>
              <div>
                Empresa: <span className="blue">"Desempregado"</span>
              </div>
              {'\u007D'}
            </CodeItem>
          </InfosContainer>
      </div>
    </Container>
  );
};


export default HomeHero;
