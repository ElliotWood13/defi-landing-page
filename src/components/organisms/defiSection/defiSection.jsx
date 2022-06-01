import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import { DefiSectionContainer, DefiSectionGrid, HeaderContainer, Blockquote, BlockquoteName, CircleCard, CircleInnerShadow } from './defiSection.styles'

import Circle from '../featuresSection/Circle'
import { GridImage } from '../brandSection/brandSection.styles'
import LinesImage from '../../../images/middle-lines.png'

import './defiSection.css'

// ❗️ ISSUE: Imported GridImage but does not display (lines 18-22)
// ❗️ ISSUE: Circle component not rendering header and text props.

export const DefiSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref} background={gradient.greyBlack}>
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

          <Circle color="yellow" header="Nft Staking Rewards" text="Option to combine up to four NFT's for up to 32% additional APY
              boost on token staking rewards." bottomLine={true} />
          <Circle color="yellow" header="Donation As A Service" text="Launchpad, Crowdfunding suite + Green finance intended to provide
              developers with the means to launch and give back." bottomLine={true} />
          <Circle color="yellow" header="Off Chain Investments" text="Protocol synergises real world assets with Meta, Crypto and DeFi
              investments as part of a diversified investment strategy." bottomLine={false} />
          <Circle color="yellow" header="Tax Haven" text="First tax haven in cryptocurrency." bottomLine={false} />

        </DefiSectionGrid>
      </DefiSectionContainer>
    </Section>
  )
})