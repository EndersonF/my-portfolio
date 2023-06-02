import {
  AiOutlineFilePdf,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp
} from 'react-icons/ai';

import { FaGithubAlt, FaTwitch } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url, '_blank', 'noopener noreferrer');
  }

  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button
          className="buttonScroll"
          type="button"
          title="Voltar ao topo"
          onClick={handleScrollTop}
        >
          <AiOutlineArrowUp />
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
          <AiFillYoutube
            onClick={() =>
              handleRedirect('https://www.youtube.com/@EndersonS16/videos')
            }
          />
          <AiOutlineFilePdf
            onClick={() =>
              handleRedirect(
                'https://drive.google.com/file/d/1PWez7mNTSqkCaE1A27KUwmrsqLXaZySD/view?usp=share_link'
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
