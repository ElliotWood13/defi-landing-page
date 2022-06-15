import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import { TeamSectionHeaderWrapper, TeamSectionHeaderH2, TeamCardsContainer } from './teamSection.styles'
import { TeamCard } from '../../molecules/teamCard'

export const TeamSection = React.forwardRef((props, ref) => {
  const team = [
    {
      id: 1,
      name: 'Shubham',
      position: 'Social Media Director',
      imgSrc: require('../../../images/team/s.png')
    },
    {
      id: 2,
      name: 'AJ',
      position: 'Founder and CEO',
      imgSrc: require('../../../images/team/a.png')
    },
    {
      id: 3,
      name: 'Cyborg',
      position: 'VP Development',
      imgSrc: require('../../../images/team/c.png')
    },
    {
      id: 4,
      name: 'Playing Mia',
      position: 'Community Director',
      imgSrc: require('../../../images/team/m.png')
    },
    {
      id: 5,
      name: 'Tommy',
      position: 'CTO',
      imgSrc: require('../../../images/team/t.png')
    },
    {
      id: 6,
      name: 'Kelvin',
      position: 'CFO',
      imgSrc: require('../../../images/team/k.png')
    },
    {
      id: 7,
      name: 'Elliot',
      position: 'Front End Developer',
      imgSrc: require('../../../images/team/e.png')
    },
  ]

    return (
      <Section ref={ref} background={gradient.greyBlack} section='section-four'>
        <TeamSectionHeaderWrapper>
          <TeamSectionHeaderH2>Team</TeamSectionHeaderH2>
        </TeamSectionHeaderWrapper>
        <TeamCardsContainer>
          { team.map(teamMember => <TeamCard key={teamMember.id} name={teamMember.name} position={teamMember.position} imageSrc={teamMember.imgSrc} />) }
        </TeamCardsContainer>
      </Section>
    )
})