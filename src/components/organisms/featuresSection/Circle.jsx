import React from 'react'
import { CircleCard } from './CircleCard.styles'

export default function Circle({ color }) {
    return (
        <CircleCard>
            {color = "white" && <div>White</div>}
            {color = "yellow" && <div>Yellow</div>}
        </CircleCard>
    )
}