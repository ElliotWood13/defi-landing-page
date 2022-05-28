import React from 'react'
import { CircleCard, CircleCardInnerShadow, CircleHeaderH3, CircleText } from './CircleCard.styles'

// TODO: Change border and shadow colour to march prop 'color'
// QUESTION FOR ELLIOT: I read that styled-components have a ThemeProvider. Do you think this the best way to go to change border and shadow colour for the circles?

export default function Circle({ color, header, text }) {
    return (
        <CircleCard color={color}>
            <CircleCardInnerShadow color={color} />
            {header && <CircleHeaderH3>{header}</CircleHeaderH3>}
            {text && <CircleText>{text}</CircleText>}
        </CircleCard>
    )
}