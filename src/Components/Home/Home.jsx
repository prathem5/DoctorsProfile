import React from 'react'
import Banner from '../Banner/Banner'
import Counter from '../aboutHome/AboutHome'
import Specialist from '../Specialist/Specialist'
import Tesntimonial from '../Testimonial/Tesntimonial'
import Footer from '../Footer/Footer'
import Booking from '../booking/Booking'
import AllLocation from '../AllLocation/AllLocation'

function Home() {
  return (
    <>
      <Banner/>
      <Counter/>
      <Specialist/>
      <Booking/>
      <AllLocation/>
      <Tesntimonial/>
      <Footer/>
    </>
  )
}

export default Home
