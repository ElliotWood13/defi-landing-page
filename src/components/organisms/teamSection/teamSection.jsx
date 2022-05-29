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
    },
    {
      name: 'AJ',
      position: 'Founder and CEO',
    },
    {
      name: 'Cyborg',
      position: 'VP Development',
    },
    {
      name: 'Playing Mia',
      position: 'Community Director',
    },
    {
      name: 'Tommy',
      position: 'CFO',
    },
    {
      name: 'Kelvin',
      position: 'CFO',
    },
    {
      name: 'Elliot',
      position: 'Front End Developer',
    },
  ]

    return (
      <Section ref={ref} background={gradient.blackGrey}>
        <TeamSectionHeaderH2>Team</TeamSectionHeaderH2>
        <TeamCardsContainer>
          { team.map(teamMember => <TeamCard name={teamMember.name} position={teamMember.position} />) }
        </TeamCardsContainer>
      </Section>
    )
})