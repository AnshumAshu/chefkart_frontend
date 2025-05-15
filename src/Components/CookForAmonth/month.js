import React from 'react'
import FoodBanner from './Banner'
import FaqMonth from './FaqMonth'
import Lower from './Lower'
import Lower1 from './Lower1'
import Work from './Work'
import BannerDow from './BannerDow'
import Carousel1 from './Slider2'
// import FloatingBanner from './FloatingBanner'

function Month() {
  return (
    <div>
      <Carousel1 />
      <BannerDow />
      <Work />
      <Lower1 />
      <Lower />
      <FaqMonth />
      <FoodBanner />
      {/* <FloatingBanner /> */}
    </div>
  )
}

export default Month