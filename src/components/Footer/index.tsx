import { SiGmail } from 'react-icons/si';
import { FaGithubAlt, FaTwitch } from 'react-icons/fa';
import {
  AiOutlineFilePdf,
  AiOutlineTwitter,
  AiFillLinkedin
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo 🡩
        </button>
        <section>
          <AiOutlineTwitter
            onClick={() =>
              handleRedirect('https://twitter.com/enderson_frazao')
            }
          />
          <FaGithubAlt
            onClick={() => handleRedirect('https://github.com/EndersonF')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect(
                'https://linkedin.com/in/enderson-frazão-121b62175'
              )
            }
          />
          <FaTwitch
            onClick={() => handleRedirect('https://www.twitch.tv/enderfpss')}
          />
          <AiOutlineFilePdf
            onClick={() =>
              handleRedirect(
                'https://drive.google.com/file/d/1xoluH1FKQb2RX7KFbCOWmQh_SPcrclNF/view?usp=sharing'
              )
            }
          />
          <SiGmail
            onClick={() =>
              handleRedirect(
                'mailto:enderson.frazao7@gmail.com?subject=Oiii%20again'
              )
            }
          />
          <span>Feito com ❤️ por Enderson</span>
        </section>
      </div>
    </Container>
  );
}

export default Footer;
