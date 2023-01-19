import SectionTitle from '../SectionTitle';
import SobreItem from './SobreItem';
import { Container } from './styles';

function Sobre() {
  return (
    <Container>
      <SectionTitle title="Sobre mim" />
      <section data-aos="fade-right">
        <SobreItem />
      </section>
    </Container>
  );
}

export default Sobre;
