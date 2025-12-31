import React from 'react'
import Navbar from './navbar'
import Herosection from './herosection'
import Testimonial from './testimonial'
import Contact from './Contact'
import Metal from './Metal'
import Footer from './Footer-section'
import FeaturedCollections from './FeaturedCollections'

export default function Home() {
  return (
   <>

    <Navbar />
    <Herosection/>
    <Metal/>
    <FeaturedCollections/>
    <Testimonial/>
    <Contact/>
    <Footer/>
   </>
  )
}
