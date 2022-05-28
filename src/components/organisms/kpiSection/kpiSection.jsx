import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'

import './kpiSection.css'

// TODO: Make card component for each "kpiSection-card"
// TODO: Store <h3>s & <li>s as data to map over for each card

export const KpiSection = React.forwardRef((props, ref) => {

  return (
    <Section ref={ref} background={gradient.greyBlack}>
      <div className="section-container">
        <div className="kpiSection-card">
          <h3 className="kpiSection__h3">Q1 2022</h3>
          <ul>
            <li>Tokenomics complete.</li>
            <li>Brand guidelines established.</li>
            <li>Light paper + road map updated.</li>
            <li>NFT artist development of concept.</li>
            <li>Hiring for key board positions.</li>
            <li>Finalising marketing strategy.</li>
            <li>Legal documentation released.</li>
          </ul>
        </div>

        <div className="kpiSection-card">
          <h3>Q2 2022</h3>
          <ul>
            <li>Finalize NFT mint.</li>
            <li>Creating and testing of smart contracts.</li>
            <li>Website launch.</li>
            <li>Set date for ICO launch.</li>
            <li>Dapp penetration testing.</li>
            <li>Launch of social media channels.</li>
            <li>KYC vertification completed.</li>
            <li>Developing Phase 1 Mesh Network protocol elements.</li>
            <li>Partnership announcements.</li>
            <li>Set date for ICO launch.</li>
            <li>Marketing drive.</li>
          </ul>
        </div>

        <div className="kpiSection-card">
          <h3>Q3 2022</h3>
          <ul>
            <li>Tax haven NFT tigers launch.</li>
            <li>ICO Launch.</li>
            <li>Finalize audits of contracts.</li>
            <li>Community events schedule begins.</li>
            <li>NFT Launch pad deployment.</li>
            <li>DEX deployment.</li>
            <li>Testing of Tax Haven protocol.</li>
            <li>Phase 2 Mesh Network additions.</li>
            <li>CMC, Coingecko listing.</li>
            <li>Opening of Launchpad applications.</li>
          </ul>
        </div>

        <div className="kpiSection-card">
          <h3>Q4 2022</h3>
          <ul>
            <li>Final testing and deployment of Tax Haven.</li>
            <li>Deployment of Crowdfunding Platform.</li>
            <li>Additional pairings added to DEX.</li>
            <li>Annual review.</li>
          </ul>
        </div>

        <div className="kpiSection-card">
          <h3>Q1 2023</h3>
          <ul>
            <li>Tax Haven rewards deployment.</li>
            <li>Deployment of Governance platform.</li>
            <li>Phase 3 Mesh Network additions.</li>
            <li>Release of Non-Profit NFT collections.</li>
            <li>Announcement of new ecosystem additions.</li>
          </ul>
        </div>
      </div>
    </Section >
  )
})
