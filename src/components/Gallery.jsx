import React from 'react';
import portfolioItems from '../portfolio/portfolioItems';

import '../styles/Gallery.scss';


/**
 * Gallery functional component
 * @returns {JSX} component
 */
export const Gallery = ({ showSpecificSection }) => {
  return (
    <div className="gallery">
      {portfolioItems.map((item) => {
        console.log(showSpecificSection)
        if (!showSpecificSection || showSpecificSection === item.type) {
          return (
            <div key={item.name} className="item">
              <img
                src={item.image}
                alt=""
              />
              <h4>{item.name}</h4>
            </div>
          );
        }
        return null;
      }
      )}
    </div>
  );
};
