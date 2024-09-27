import React from 'react'
import Nav from '../components/Nav'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <Nav/>
        <About/>
        <Portfolio/>
        <Footer/>
    </div>
  )
}

export default page
