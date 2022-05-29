import React from 'react'
import { CircleCard, CircleCardInnerShadow, CircleHeaderH3, CircleText } from './CircleCard.styles'

// TODO: Change border and shadow colour to march prop 'color'

export default function Circle({ color, header, text }) {
    return (
        <CircleCard color={color}>
            <CircleCardInnerShadow color={color} />
            {header && <CircleHeaderH3>{header}</CircleHeaderH3>}
            {text && <CircleText>{text}</CircleText>}
        </CircleCard>
    )
}