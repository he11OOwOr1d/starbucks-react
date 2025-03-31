import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Navbar/Navbar'
import Hero from './components/HeroCard/Herocard'
import './App.css'
import Cuisine from './components/Cuisine/Cuisine'
import Barista from './components/Barista/Barista'
import Coffee from './components/Coffeeworld/coffee'
import Footer from './components/Footer/Footer'
import Carousel from './components/example/example'

function App() {

  return (
    <>
      <div>
        <Home />
        <Hero/>
        <Cuisine/>
        <Barista/>
        <Coffee/>
        <Footer/>
        {/* <Carousel/> */}
      </div>
    </>
  )
}

export default App
