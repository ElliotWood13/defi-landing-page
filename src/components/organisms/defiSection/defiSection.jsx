import React from 'react'
import { Section } from './components/layouts/section'
import { gradient } from './design'

export const DefiSection = () => {
    return (
      <Section id="section2" background={gradient.blackGrey}>
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
    )
}