import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import { TeamSectionHeaderH2, TeamCardsContainer } from './teamSection.styles'
import { TeamCard } from '../../molecules/teamCard'

export const TeamSection = React.forwardRef((props, ref) => {

  const team = [
    {
      name: 'Shubham',
      position: 'Social Media Director',
      imgSrc: require('../../../images/team/s.png')
    },
    {
      name: 'AJ',
      position: 'Founder and CEO',
      imgSrc: require('../../../images/team/a.png')
    },
    {
      name: 'Cyborg',
      position: 'VP Development',
      imgSrc: require('../../../images/team/c.png')
    },
    {
      name: 'Playing Mia',
      position: 'Community Director',
      imgSrc: require('../../../images/team/m.png')
    },
    {
      name: 'Tommy',
      position: 'CFO',
      imgSrc: require('../../../images/team/t.png')
    },
    {
      name: 'Kelvin',
      position: 'CFO',
      imgSrc: require('../../../images/team/k.png')
    },
    {
      name: 'Elliot',
      position: 'Front End Developer',
      imgSrc: require('../../../images/team/e.png')
    },
  ]

    return (
      <Section ref={ref} background={gradient.greyBlack}>
        <TeamSectionHeaderH2>Team</TeamSectionHeaderH2>
        <TeamCardsContainer>
          { team.map(teamMember => <TeamCard name={teamMember.name} position={teamMember.position} imageSrc={teamMember.imgSrc} />) }
        </TeamCardsContainer>
      </Section>
    )
})