import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import { DefiSectionContainer, DefiSectionGrid, HeaderContainer, Blockquote, BlockquoteName, Circle, CircleInnerShadow } from './defiSection.styles'
import { GridImage } from '../brandSection/brandSection.styles'

import './defiSection.css'

// TODO: Create circle component ✅
// TODO: Fix imported GridImage

// TODO: Elliot Question for Dan (READ BY DAN 👍) - can CircleInnerShadow be an after element on Circle? (I don't know the answer at this point) 
// ANSWER: Tried ::before but z-index was a problem - will double-check

export const DefiSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref} background={gradient.blackGrey}>
      <DefiSectionContainer>

        {/* <GridImage
          src={require('../../../images/grid.png')}
          alt=""
          role="presentation"
        /> */}

        <DefiSectionGrid>

          <HeaderContainer>
            <Blockquote>
              "To change something, you must build a new model that makes the
              existing model obsolete" <BlockquoteName>- Buckminster Fuller</BlockquoteName>
            </Blockquote>
          </HeaderContainer>

          <Circle>
            <CircleInnerShadow />
            <h3 className="circle__header">Nft Staking Rewards</h3>
            <p className="circle__text">
              Option to combine up to four NFT's for up to 32% additional APY
              boost on token staking rewards.
            </p>
          </Circle>

          <Circle>
            <CircleInnerShadow />
            <h3 className="circle__header">Donation As A Service</h3>
            <p className="circle__text">
              Launchpad, Crowdfunding suite + Green finance intended to provide
              developers with the means to launch and give back.
            </p>
          </Circle>

          <Circle>
            <CircleInnerShadow />
            <h3 className="circle__header">Off Chain Investments</h3>
            <p className="circle__text">
              Protocol synergises real world assets with Meta, Crypto and DeFi
              investments as part of a diversified investment strategy.
            </p>
          </Circle>

          <Circle>
            <CircleInnerShadow />
            <h3 className="circle__header">Tax Haven</h3>
            <p className="circle__text">
              First tax haven in cryptocurrency.
            </p>
          </Circle>

        </DefiSectionGrid>
      </DefiSectionContainer>
    </Section>
  )
})