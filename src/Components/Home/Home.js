import React from 'react'
import FoodBanner from './FoodBanner'
import FloatingBanner from './FloatingBanner'
import Priceing from './Priceing'
import WhyChooseUs from './WhyChoose'
import Work from './Work'
import StatsSections from './StatSection'
import Testimonial1 from './Testimonial'
import Testimonial2 from './Testimonial2'
import Testimonial3 from './Testimonial3'
import SkillIndiaSection from './SkillIndiaSection'
import GalleryWithState from './GalleryWithState'
import GalleryAutoSlideZoom from './Gallery'
import TakeItForward from './TakeItForward'
import Carousel2 from './Carousel2'

const Home = () => {
  return (
    <div>
      <Carousel2 />
      <Priceing />
      <WhyChooseUs />
      <Work />
      <StatsSections />
      <Testimonial2 />
      <Testimonial1 />
      <Testimonial3 />
      <SkillIndiaSection />
      <GalleryWithState />
      <GalleryAutoSlideZoom />
      <TakeItForward />
      <FoodBanner />
      <FloatingBanner />

    </div>
  )
}

export default Home