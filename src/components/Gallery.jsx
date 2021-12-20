import React from 'react';
import portfolioItems from '../portfolio/portfolioItems';

import '../styles/Gallery.scss';


/**
 * Gallery functional component
 * @returns {JSX} component
 */
export const Gallery = () => {
  return (
    <div className="gallery">
      {portfolioItems.map((item) => (
        <div key={item.name} className="item">
          <img
            src={item.image}
            alt=""
          />
          <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  );
};
