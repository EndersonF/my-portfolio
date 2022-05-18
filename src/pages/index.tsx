import {HomeContainer} from '../styles/HomeStyles';
import Header from "../components/Header";
import HomeHero from '../components/Header/HomeHero';
import Experiencias from '../components/Header/Experiencias';
import Projetos from '../components/Header/Projetos';
import Conhecimentos from '../components/Header/Conhecimentos';


export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <title>Home | Enderson</title>
      <main className = "container">
        <HomeHero/>
        <Experiencias/>  
        <Projetos/>
        <Conhecimentos/>
        </main>      
    </HomeContainer>
  );
}
