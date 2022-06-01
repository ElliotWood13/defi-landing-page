import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'
import { SectionContainer, SectionGrid, KpiSectionCard, KpiSectionCardHeader, KpiSectionCardUl, KpiSectionCardLi, KpiSectionImage } from './kpiSection.styles'
import middleSectionImage from '../../../images/middle-section.png'
import Data from './kpiData'


export const KpiSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref} background={gradient.greyBlack}>
      <KpiSectionImage src={middleSectionImage} />
      <SectionContainer>
        <SectionGrid>
          {Data.map(({ id, title, listItems }) => (
            <KpiSectionCard key={id}>
              <KpiSectionCardHeader>{title}</KpiSectionCardHeader>
              <KpiSectionCardUl>
                {listItems.map(item => (
                  <KpiSectionCardLi>{item}</KpiSectionCardLi>
                ))}
              </KpiSectionCardUl>
            </KpiSectionCard>
          ))}
        </SectionGrid>
      </SectionContainer>
    </Section >
  )
})
