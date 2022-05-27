import React from 'react'
import { Section } from './components/layouts/section'
import { gradient } from './design'

export const BrandSection = () => {
    return (
        <Section id="section1" background={gradient.greyBlack}>
            <div>
                <p>Logo</p>
                <h1>Impact Defi</h1>
                <h2>The future lives on the mesh</h2>
            </div>
        </Section>
    )
}