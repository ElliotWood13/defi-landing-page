import React from 'react'
import './App.css'
// import scrollSnapPolyfill from 'css-scroll-snap-polyfill'
import { RegularLayout } from './components/layouts/regularLayout'
import { Header } from './components/organisms/header'
import { BrandSection } from './components/organisms/brandSection/brandSection'
import { CountdownSection } from './components/organisms/countdownSection/countdownSection'
import { DefiSection } from './components/organisms/defiSection'
import { FeaturesSection } from './components/organisms/featuresSection'
import { KpiSection } from './components/organisms/kpiSection/kpiSection'
import { TeamSection } from './components/organisms/teamSection'

// TODO: Think about how to space sections
// TODO: Change scroll to section to use useRef instead of ID's - make sure mobile menu works
// TODO: Update logo192 and logo512 in index.html
// TODO: Uninstall scrollSnapPolyfill package if not used


function App() {
  return (
    <>
      <Header />
      <RegularLayout>
        <BrandSection />
        <DefiSection />
        <FeaturesSection />
        <TeamSection />
        <KpiSection />
        <CountdownSection />
      </RegularLayout>
    </>
  )
}

export default App
