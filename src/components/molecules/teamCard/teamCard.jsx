import React from 'react'
import { TeamCardWrapper, TeamCardOuterBox, TeamCardName, TeamCardPosition } from './teamCard.styles'

export const TeamCard = ({ name, position }) => {
  return (
    <TeamCardWrapper>
      <TeamCardOuterBox/>
        <TeamCardName>{ name }</TeamCardName>
        <TeamCardPosition>{ position }</TeamCardPosition>
    </TeamCardWrapper>
  )
}