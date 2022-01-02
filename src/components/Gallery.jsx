import React, { useState } from 'react';
import portfolioItems from '../portfolio/portfolioItems';
import { Modal } from 'react-responsive-modal';
import PropTypes from 'prop-types';

import 'react-responsive-modal/styles.css';
import '../styles/Gallery.scss';


/**
 * Gallery functional component
 * @returns {JSX} component
 */
export const Gallery = ({ showSpecificSection }) => {
  const [selected, setSelected] = useState(null)

  return (
    <div className="gallery">
      {portfolioItems.map((item) => {
        if (!showSpecificSection || showSpecificSection === item.type) {
          return (
            <div
              key={item.name}
              className="item"
              onClick={() => setSelected(item)}>
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
      <Modal
        open={selected}
        onClose={() => setSelected(null)}
        center
        classNames={{ closeButton: 'close-button', modal: 'modal' }}
      >
        {selected &&
          <div className="modal-content">
            <h2>{selected.name}</h2>
            <div className="subheader">
              <div className="company">{selected.company}</div>
              <div className="date">{selected.date}</div>
              {selected.github &&
                (<a href={selected.github} target="_blank" rel="noreferrer">
                  <div className="github-link">
                    <div className="github-view">View on Github</div>
                    <i className="fab fa-github"></i>
                  </div>
                </a>
                )}
            </div>
            <hr />
            <h3>Description</h3>
            <ul>
              {selected.description.map((item, idx) => idx === 0
                ? <h3>{item}</h3>
                : <li>{item}</li>
              )}
            </ul>
          </div>
        }
      </Modal>
    </div>
  );
};

Gallery.defaultProps = {
  showSpecificSection: null
}

Gallery.propTypes = {
  showSpecificSection: PropTypes.any
};
