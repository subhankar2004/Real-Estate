import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import './App.css'
import Companies from './components/Companies'
import Residency from './components/Residency'
import Value from './components/Value'
import Contact from './components/Contact'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='App'>
      <div>
      <div className="white-gradient"/>
      <Header />
      <Hero />
      </div>
     <Companies />
     <Residency />
     <Value />
     <Contact />
     <GetStarted />
     <Footer />
    </div>
  )
}

export default App

