import { CgMail } from "react-icons/cg";
import { FaGithubAlt, FaTwitch, FaInstagram } from 'react-icons/fa';
import {
  AiOutlineFilePdf,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineWhatsApp
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
          Voltar ao topo
        </button>
        <section>
          <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com/enderson_frazao')}
          />
          <FaGithubAlt
            onClick={() => handleRedirect('https://github.com/EndersonF')}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect('https://linkedin.com/in/enderson-frazão-121b62175')}
          />
          <FaTwitch
            onClick={() => handleRedirect('https://www.twitch.tv/enderfpss')}
          />
          <FaInstagram
            onClick={() => handleRedirect('https://www.instagram.com/enderfrazao_07/')}
          />
          <AiOutlineFilePdf
            onClick={() => handleRedirect('https://drive.google.com/file/d/1ZdApqIZovoT9WbSqE7GQ5CEy1hR957Fp/view')}
          />
          <AiOutlineWhatsApp
            onClick={() => handleRedirect('https://api.whatsapp.com/send?phone=5569992201666')}
          />
          <CgMail
            onClick={() => handleRedirect('mailto:enderson.frazao7@gmail.com?subject=Oiii%20again')}
          />
          <span>Feito com ❤️ por Enderson</span>
        </section>
      </div>
    </Container>
  );
}

export default Footer;