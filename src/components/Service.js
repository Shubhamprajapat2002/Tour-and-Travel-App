import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import mainimg from '../images/3.jpg'
import Footer from './Footer'
import Trip from './Trip'


const Service = () => {
  return (
    <>
    
    <Navbar />
         <Hero 
         cName="hero"
         heroImg ={mainimg}
         title="Service Available"
         btnClass="hide"
         />
         <Trip />
         <Footer />
    </>
  )
}

export default Service