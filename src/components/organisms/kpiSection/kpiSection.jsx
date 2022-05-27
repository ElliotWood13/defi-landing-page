import React from 'react'
import { Section } from '../../layouts/section'
import { gradient } from '../../../design'

import './kpiSection.css';

// TODO: Make card component for each "kpiSection-card"
// TODO: Store <h3>s & <li>s as data to map over for each card

export const KpiSection = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref} background={gradient.greyBlack}>
      <div className="section-container">
        <div className="kpiSection-card">
          <h3 className="kpiSection__h3">Q1 2022</h3>
          <ul>
            <li>Tokenomics complete</li>
            <li>Tokenomics complete</li>
            <li>Tokenomics complete</li>
            <li>Tokenomics complete</li>
            <li>Tokenomics complete</li>
            <li>Tokenomics complete</li>
            <li>Tokenomics complete</li>
          </ul>
        </div>

        <div className="kpiSection-card">
          <h3>Q2 2022</h3>
          <ul>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
            <li>Finalize NFT mint</li>
          </ul>
        </div>

        <div className="kpiSection-card">
          <h3>Q3 2022</h3>
          <ul>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
            <li>Tax haven NFT tigers launch</li>
          </ul>
        </div>

        <div className="kpiSection-card">
          <h3>Q4 2022</h3>
          <ul>
            <li>Final testing and deployment of Tax Haven</li>
            <li>Final testing and deployment of Tax Haven</li>
            <li>Final testing and deployment of Tax Haven</li>
          </ul>
        </div>

        <div className="kpiSection-card">
          <h3>Q1 2023</h3>
          <ul>
            <li>Tax haven rewards deployment</li>
            <li>Tax haven rewards deployment</li>
            <li>Tax haven rewards deployment</li>
          </ul>
        </div>
      </div>
    </Section>
  )
})
