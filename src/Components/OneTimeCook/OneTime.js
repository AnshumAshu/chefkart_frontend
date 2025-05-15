import React from 'react'
import FaqOneTime from './FaqOneTime'
import Lower1 from './Lower'
import Lower2 from './Lower2'
import Testimonial from './Testimonial'
import Hear from './Hear'
import Work from '../CookForAmonth/Work'
import StatsSection from '../ChefConnection/Stat'
import BannerDow from './BannerDow'
import Carousel3 from './Slider3'


function OneTime() {
  return (
    <div>
      <Carousel3 />
      <BannerDow />
      <StatsSection />
      <Work />
      <Hear />
      <Testimonial />
      <Lower2 />
      <Lower1 />
      <FaqOneTime />
    </div>
  )
}

export default OneTime