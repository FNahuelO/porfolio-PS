import AboutMe from './AboutMe'
import Skills from './Skills'
import Proyectos from './Proyectos'
import HomeComponent from '../components/Home'
import { Container } from '../../style/Container'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1).replace(/%20/g, ' ')
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <>
      <Container flex="column" bg="white">
        <Nav />
        <HomeComponent />
        <AboutMe />
        <Skills />
        <Proyectos />
        <Footer />
      </Container>
    </>
  )
}

export default Home
