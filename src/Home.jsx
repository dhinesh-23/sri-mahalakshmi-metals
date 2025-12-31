import React from 'react'
import Herosection from './Herosection'
import Testimonial from './Testimonial'
import Contact from './Contact'
import Metal from './Metal'
import Footer from './Footer-section'
import FeaturedCollections from './FeaturedCollections'
import Navmenu from './Navmenu'

export default function Home() {
  return (
   <>

    <Navmenu/>
    <Herosection/>
    <Metal/>
    <FeaturedCollections/>
    <Testimonial/>
    <Contact/>
    <Footer/>
   </>
  )
}
