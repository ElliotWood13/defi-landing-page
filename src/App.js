import React, { useRef, useState, useLayoutEffect } from 'react'
import { RegularLayout } from './components/layouts/regularLayout'
import { Header } from './components/organisms/header'
import { BrandSection } from './components/organisms/brandSection/brandSection'
import { CountdownSection } from './components/organisms/countdownSection/countdownSection'
import { DefiSection } from './components/organisms/defiSection'
import { FeaturesSection } from './components/organisms/featuresSection'
import { KpiSection } from './components/organisms/kpiSection/kpiSection'
import { TeamSection } from './components/organisms/teamSection'
import { Navigation } from './components/organisms/navigation'

// TODO: Update logo192 and logo512 in index.html

function App() {
  const brandSectionRef = useRef(null)
  const uspSectionRef = useRef(null)
  const featuresSectionRef = useRef(null)
  const teamSectionRef = useRef(null)
  const targetsSectionRef = useRef(null)
  const countdownSectionRef = useRef(null)
  const refs = useRef({
    brandSectionRef,
    uspSectionRef,
    featuresSectionRef,
    teamSectionRef,
    targetsSectionRef,
    countdownSectionRef,
  })
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Header>
        <Navigation ref={refs} handleScroll={handleScroll} />
      </Header>
      <RegularLayout>
        <BrandSection ref={brandSectionRef} />
        <DefiSection ref={uspSectionRef} />
        <FeaturesSection ref={featuresSectionRef} />
        <TeamSection ref={teamSectionRef} />
        <KpiSection ref={targetsSectionRef} />
        <CountdownSection ref={countdownSectionRef} />
      </RegularLayout>
    </>
  )
}

export default App
