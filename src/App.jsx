import { Container } from '../style/Container'
import Contacto from './pages/Contacto'
import Home from './pages/Home'
//import './App.css'
import Nav from './components/Nav'
import Nosotros from './pages/Nosotros'
import Prices from './pages/Prices'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
        rel="stylesheet"
      />
      <Container flex="column" bg="white">
        <Nav />
        <Home />
        <Nosotros />
        <Services />
        <Prices />
        <Contacto />
        {/* <Portfolio /> */}
      </Container>
    </>
  )
}

export default App
