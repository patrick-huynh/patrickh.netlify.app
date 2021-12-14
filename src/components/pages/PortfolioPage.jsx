import React, { useState } from 'react';
import { Gallery } from '../Gallery';
import '../../styles/PortfolioPage.scss';




/**
 * PortfolioPage functional component
 * @returns {JSX} component
 */
export const PortfolioPage = () => {
  const [selected, setSelected] = useState(null);
  const sections = ['Work Experience', 'Personal Projects', 'Volunteer Experience', 'Extra Curricular'];
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {sections.map((section, idx) => (
          <li
            className={idx === selected ? 'active' : ''}
            key={idx}
            onClick={() => setSelected(idx)}
          >
            {section}
          </li>
        ))}
      </ul>
      <Gallery />
    </div>
  )
};