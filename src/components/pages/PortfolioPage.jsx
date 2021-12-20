import React, { useState } from 'react';
import { Gallery } from '../Gallery';
import Portfolio from '../../enums/Portfolio';
import '../../styles/PortfolioPage.scss';




/**
 * PortfolioPage functional component
 * @returns {JSX} component
 */
export const PortfolioPage = () => {
  const [selected, setSelected] = useState(null);
  const sections = Object.values(Portfolio);

  const handleSelected = (e) => {
    const { outerText } = e.target;
    if (outerText === selected) {
      setSelected(null);
    } else {
      setSelected(outerText);
    }
  }
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {sections.map((section, idx) => (
          <li
            className={sections[idx] === selected ? 'active' : ''}
            key={section}
            onClick={(e) => handleSelected(e)}
          >
            {section}
          </li>
        ))}
      </ul>
      <Gallery 
        showSpecificSection={selected}
      />
    </div>
  )
};