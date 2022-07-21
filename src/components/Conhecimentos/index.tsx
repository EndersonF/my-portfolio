import { AiFillHtml5 } from 'react-icons/ai';
import { DiGit } from 'react-icons/di';
import { FaCss3Alt, FaReact, FaWindows, FaLinux, FaNpm } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoNodejs, IoLogoPython } from 'react-icons/io5';
import {
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiBlockchaindotcom,
  SiVisualstudiocode
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="PostgreSQL" icon={<SiPostgresql />} />
        <ConhecimentoItem title="TypeScript" icon={<SiTypescript />} />
        <ConhecimentoItem title="MySQL" icon={<GrMysql />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="NextJS" icon={<SiNextdotjs />} />
        <ConhecimentoItem title="Blockchain" icon={<SiBlockchaindotcom />} />
        <ConhecimentoItem title="Git" icon={<DiGit />} />
        <ConhecimentoItem title="NodeJS" icon={<IoLogoNodejs />} />
        <ConhecimentoItem title="Python" icon={<IoLogoPython />} />
        <ConhecimentoItem title="VS Code" icon={<SiVisualstudiocode />} />
        <ConhecimentoItem title="Npm" icon={<FaNpm />} />
        <ConhecimentoItem title="Windows" icon={<FaWindows />} />
        <ConhecimentoItem title="Linux" icon={<FaLinux />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
