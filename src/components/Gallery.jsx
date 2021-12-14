import React from 'react';
import nhss from '../assets/images/nhss_grad.png';
import '../styles/Gallery.scss';


/**
 * Gallery functional component
 * @returns {JSX} component
 */
export const Gallery = () => {
  return (
    <div className="gallery">
      <div className="item">
        <img
          src={nhss}
          alt=""
        />
        <h4>Full Stack Software Developer</h4>
      </div>
      <div className="item">
        <img
          src={nhss}
          alt=""
        />
        <h4>Full Stack Software Developer</h4>
      </div>
      <div className="item">
        <img
          src={nhss}
          alt=""
        />
        <h4>Full Stack Software Developer</h4>
      </div>
    </div>
  );
}

