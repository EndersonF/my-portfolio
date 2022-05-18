import { AiFillHtml5 } from 'react-icons/ai';
import {FaCss3Alt, FaReact} from 'react-icons/fa';
import { IoLogoJavascript} from 'react-icons/io5';
import { IoLogoNodejs} from 'react-icons/io5';
import { SiPostgresql} from 'react-icons/si';
import { IoLogoGithub} from 'react-icons/io5';
import { GrMysql} from 'react-icons/gr';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';


function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Habilidades"/>
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />}/>
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />}/>
        <ConhecimentoItem title="React" icon={<FaReact />}/>
        <ConhecimentoItem title="NodeJS" icon={<IoLogoNodejs />}/>
        <ConhecimentoItem title="PostgreSQL" icon={<SiPostgresql />}/>
        <ConhecimentoItem title="MySQL" icon={<GrMysql />}/>
        <ConhecimentoItem title="GitHub" icon={<IoLogoGithub />}/>
        </section>
    </Container>
  );
};

export default Conhecimentos;
