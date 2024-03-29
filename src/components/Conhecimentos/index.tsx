import { AiFillHtml5 } from 'react-icons/ai';
import { DiGit } from 'react-icons/di';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import {
  IoLogoJavascript,
  IoLogoPython,
  IoLogoNodejs,
  IoLogoSass,
  IoLogoWordpress
} from 'react-icons/io5';
import { SiTypescript, SiNextdotjs, SiStyledcomponents } from 'react-icons/si';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="TypeScript" icon={<SiTypescript />} />
        <ConhecimentoItem title="Next.JS" icon={<SiNextdotjs />} />
        <ConhecimentoItem title="Node.JS" icon={<IoLogoNodejs />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="WordPress" icon={<IoLogoWordpress />} />
        <ConhecimentoItem title="Git" icon={<DiGit />} />
        <ConhecimentoItem title="Python" icon={<IoLogoPython />} />
        <ConhecimentoItem
          title="Styled Components"
          icon={<SiStyledcomponents />}
        />
        <ConhecimentoItem title="Sass" icon={<IoLogoSass />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
