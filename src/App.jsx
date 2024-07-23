import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from '../style/Container'
import Contacto from './pages/Contacto'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
        rel="stylesheet"
      />
      <Router>
        <Container flex="column">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
