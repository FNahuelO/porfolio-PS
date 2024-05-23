import AboutMe from './AboutMe'
import Skills from './Skills'
import Proyectos from './Proyectos'
import HomeComponent from '../components/Home'
import { Container } from '../../style/Container'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Container flex="column" bg="white">
        <Nav />
        <HomeComponent />
        <AboutMe />
        <Skills />
        <Proyectos />
      </Container>
    </>
  )
}

export default Home
