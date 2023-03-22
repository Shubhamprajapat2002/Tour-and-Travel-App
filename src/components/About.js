import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import AboutImg from '../images/night.jpg'
import Footer from './Footer'
import AboutUS from './AboutUS'

const About = () => {
  return (
    <>
    
     <Navbar />
         <Hero 
         cName="hero-mid"
         heroImg ={AboutImg}
         title="About Us"
       
         btnClass="hide"
         />
         <AboutUS />
         <Footer />
        
    </>
  )
}

export default About