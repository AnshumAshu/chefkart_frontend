import React from 'react'
import FAQ2 from './Faq2'
import Lower from './Lower'
import Lower1 from './Lower1'
import Testimonial from './Testimonial'
import Hear from './Hearit'
import Cater from './Cater'
import SimpleSlider from './Slider1'
import StatsSection from './Stat'
import Carousel from './crouse'


function ChefConnection() {
  return (
    <div>
        <Carousel />
        <StatsSection />
        <SimpleSlider />
        <Cater/>
        <Hear/>
        <Testimonial />
        <Lower1 />
        <Lower />
        <FAQ2 />   
    </div>
  )
}

export default ChefConnection