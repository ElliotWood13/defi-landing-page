import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'

import './defiSection.css'

// TODO: Create grid layout
// TODO: Assign grid placement
/* TODO: Responsiveness 
  sm - stacked 1 col, quote on top
  md - stacked, quote on top, 2 cols for circles
  lg - 3 cols, quote in middle, 2 rows for circles
*/
// TODO: Style circles
// TODO: Create circle component

export const DefiSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref} background={gradient.blackGrey}>
      <div className="container">
        <div className="grid">

          <blockquote className="blockquote">
            "To change something, you must build a new model that makes the
            existing model obselete" <span className="blockquote__name">- Buckminster Fuller</span>
          </blockquote>

          <div className="circle">
            <h3 className="circle__header">Nft Staking Rewards</h3>
            <p className="circle__text">
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

        </div>
      </div>
    </Section>
  )
})