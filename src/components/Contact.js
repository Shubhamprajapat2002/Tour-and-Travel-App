import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import mainimg from '../images/2.jpg'
import Footer from './Footer'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <>
    <Navbar />
         <Hero 
         cName="hero"
         heroImg ={mainimg}
         title="Contact Us"
         btnClass="hide"
         />
         <ContactForm />
         <Footer />
    </>
  )
}

export default Contact