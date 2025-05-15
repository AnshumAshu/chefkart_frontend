import React from 'react'
import AnnouncementBanner from './Bootom'
import SignupSection from './SignUpSection'
import InvestorsCarousel from './Investors'
import PressReleases from './PressReleas'
import MissionSection from './Mission'
import Carousel2 from './carousel2'

const Invester = () => {
  return (
    <div>
        <Carousel2 />
        <MissionSection />
        <PressReleases />
        <InvestorsCarousel />
        <SignupSection />
        <AnnouncementBanner />
    </div>
  )
}

export default Invester