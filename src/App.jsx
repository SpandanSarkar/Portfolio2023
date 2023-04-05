import React from 'react'
import Header from './components/header/header.jsx'
import Nav from './components/nav/nav.jsx'
import About from './components/about/about.jsx'
import Experience from './components/experience/experience.jsx'
import Servieces from './components/serviecs/services.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Testimonials from './components/testimonials/testimonials.jsx'
import Contacts from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'
const App = () => {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      <Servieces></Servieces>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Contacts></Contacts>
      <Footer></Footer>
    </>
  )
}

export default App