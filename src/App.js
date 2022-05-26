import React from 'react'
import './App.css'
// import scrollSnapPolyfill from 'css-scroll-snap-polyfill' - uninstall package if not used
import { Section } from './components/layouts/section'
import { RegularLayout } from './components/layouts/regularLayout'
import { Header } from './components/organisms/Header'
import { gradient } from './design'

// TODO: Restrict content width
// TODO: Change scroll to section to use useRef

function App() {
  return (
    <>
      <Header />
      <RegularLayout>
        <Section id="section1" background={gradient.whitePurple}>
          <div>
            <p>Logo</p>
            <h1>Impact Defi</h1>
            <h2>The future lives on the mesh</h2>
          </div>
        </Section>
        <Section id="section2" background={gradient.whitePurple}>
          <blockquote>
            "To change something, you must build a new model that makes the
            existing model obselete" <span>- Buckminster Fuller</span>
          </blockquote>
          <div>
            <h3>Nft Staking Rewards</h3>
            <p>
              Option to combine up to four NFT's for up to 32% additional APY
              boost on token staking rewards.
            </p>
          </div>
          <div>
            <h3>Donation As A Service</h3>
            <p>
              Launchpad, Crowdfunding suite + Green finance intended to provide
              developers with the means to launch and give back.
            </p>
          </div>
          <div>
            <h3>Off Chain Investments</h3>
            <p>
              Protocol synergises real world assets with Meta, Crypto and DeFi
              investments as part of a diversified investment strategy.
            </p>
          </div>
          <div>
            <h3>Tax Haven</h3>
            <p>First tax haven in cryptocurrency.</p>
          </div>
        </Section>
        <Section id="section3" background={gradient.whitePurple}>
          <h2>Built on the mesh network</h2>
          <h3>Enhanced Security Network</h3>
          <h3>Insulation from market volatility</h3>
          <h3>Consistent network stability</h3>
          <h3>Interoperability between tradfi and defi</h3>
        </Section>
        <Section id="section4" background={gradient.whitePurple}>
          <h2>Team</h2>
          <div>
            <p>Shubham</p>
            <p>Social Media Director</p>
          </div>
          <div>
            <p>AJ</p>
            <p>Founder and CEO</p>
          </div>
          <div>
            <p>Cyborg</p>
            <p>VP Development</p>
          </div>
        </Section>
        <Section id="section5" background={gradient.whitePurple}>
          <h3>Q1 2022</h3>
          <ul>
            <li>Tokenomics complete</li>
            <li>Tokenomics complete</li>
            <li>Tokenomics complete</li>
            <li>Tokenomics complete</li>
            <li>Tokenomics complete</li>
            <li>Tokenomics complete</li>
            <li>Tokenomics complete</li>
          </ul>

          <h3>Q2 2022</h3>
          <ul>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
          </ul>

          <h3>Q3 2022</h3>
          <ul>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
          </ul>

          <h3>Q4 2022</h3>
          <ul>
            <li>Final testing and deployment of Tax Haven</li>
            <li>Final testing and deployment of Tax Haven</li>
            <li>Final testing and deployment of Tax Haven</li>
          </ul>

          <h3>Q1 2023</h3>
          <ul>
            <li>Tax haven rewards deployment</li>
            <li>Tax haven rewards deployment</li>
            <li>Tax haven rewards deployment</li>
          </ul>
        </Section>
        <Section id="section6" background={gradient.whitePurple}>
          <h2>Defi 3.0 Begins Here</h2>
          <div>
            <p>Icon</p>
            <p>Icon</p>
            <p>Icon</p>

            <p>Timer</p>
          </div>
        </Section>
      </RegularLayout>
    </>
  )
}

export default App
