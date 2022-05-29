import React from 'react'
import { TeamCardWrapper, TeamCardImageWrapper, TeamCardImage, TeamCardInnerShadow, TeamCardName, TeamCardPosition } from './teamCard.styles'

export const TeamCard = ({ name, position, imageSrc }) => {
  return (
    <TeamCardWrapper>
      <TeamCardImageWrapper>
        <TeamCardImage src={imageSrc} alt={`Image of ${name}`} />
        <TeamCardInnerShadow />
      </TeamCardImageWrapper>
      <TeamCardName>{ name }</TeamCardName>
      <TeamCardPosition>{ position }</TeamCardPosition>
    </TeamCardWrapper>
  )
}