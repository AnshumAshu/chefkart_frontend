import React from 'react'
import FoodBanner from './FoodBanner'
import Lower from './Lower'
import Lower1 from './Lower1'
import Work from './Work'
import BannerDow1 from './BannerDow'
import Carousel2 from './Course'
import GalleryWithState from './GalleryWithState'
import GalleryAutoSlideZoom from './GalleryAutoSlideZoom'
import Stat from './Stat'
import FloatingBanner from './FloatingBanner'

function Party() {
  return (
    <div>
      <Carousel2 />
      <BannerDow1 />
      <Work />
      <Stat />
      <GalleryWithState />
      <GalleryAutoSlideZoom />
      <Lower1 />
      <Lower />
      <FoodBanner />
      <FloatingBanner />
    </div>
  )
}

export default Party