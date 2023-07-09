// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from "./data"

function App() {

  let Cards = data.map((i) => 
    <Card img={i.coverImg} 
          rating={i.stats.rating} 
          reviewCount={i.stats.reviewCount} 
          location={i.location} 
          title={i.title} 
          price={i.price}/>);

  return (
  <div>
    <Navbar/>
    <Hero/>
    <div className="cards--list">{Cards}</div>
    {/* <Card 
      img="katie-zaferes.png"
      rating="5.0"
      reviewCount={6}
      location="USA"
      title="Life Lessons with Katie Zaferes"
      price={136}
    /> */}

    </div>
  )
}

export default App
