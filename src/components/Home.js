import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import mainimg from '../images/12.jpg'
import Destination from './Destination'
import Trip from './Trip'
import Footer from './Footer'


const Home = () => {
  return (
    <>
         <Navbar />
         <Hero 
         cName="hero"
         heroImg ={mainimg}
         title="Your Journey Your Story"
         text="Choose Your Favourite Destination."
         buttonText="Travel Plan"
         url="/"
         btnClass="show"
         />
         <Destination />
         <Trip />
         <Footer />
    </>
  )
}

export default Home