import React from 'react'
import StatsSection from './StatsSection'
import Lower2 from './Lower2'
import Lower3 from './Lower3'
import GallerySection from './GallerySection'
import Hero from './Hero'
import Contact from './Contact'
import SocialSection from './SocialSection'
import VideoGallery from './VideoGallery'

function About() {
  return (
    <div>
      <Hero />
      <Lower3 />
      <Lower2 />
      <StatsSection />
      <GallerySection />
      <VideoGallery />
      <Contact />
      <SocialSection />
    </div>
  )
}

export default About