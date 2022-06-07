import React, { useState, useEffect } from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import { DefiSectionContainer, DefiSectionGrid, HeaderContainer, Blockquote, BlockquoteName } from './defiSection.styles'
import { Circle } from '../../molecules/circle'
import { useWindowResize } from '../../../hooks'

export const DefiSection = React.forwardRef((props, ref) => {
  const [width] = useWindowResize()
  const [bottomLines, setBottomLines] = useState({ 1: true, 2: true, 3: true, 4: false})

  useEffect(() => {
    if (width >= 768) {
      setBottomLines({1: true, 2: true, 3: false, 4: false})
    }
  }, [width])

  return (
    <Section ref={ref} background={gradient.greyBlack} section='section-two'>
      <DefiSectionContainer>
        <DefiSectionGrid>
          <HeaderContainer>
              <Blockquote>
                "To change something, you must build a new model that makes the
                existing model obsolete" <BlockquoteName>- Buckminster Fuller</BlockquoteName>
              </Blockquote>
            {/* <HorizontalLine /> */}
          </HeaderContainer>

          <Circle color="yellow" header="Nft Staking Rewards" text="Option to combine up to four NFT's for up to 32% additional APY
              boost on token staking rewards." bottomLine={bottomLines[1]} />
          <Circle color="yellow" header="Donation As A Service" text="Launchpad, Crowdfunding suite + Green finance intended to provide
              developers with the means to launch and give back." bottomLine={bottomLines[2]} />
          <Circle color="yellow" header="Off Chain Investments" text="Protocol synergises real world assets with Meta, Crypto and DeFi
              investments as part of a diversified investment strategy." bottomLine={bottomLines[3]} />
          <Circle color="yellow" header="Tax Haven" text="First tax haven in cryptocurrency." bottomLine={bottomLines[4]} />

        </DefiSectionGrid>
      </DefiSectionContainer>
    </Section>
  )
})