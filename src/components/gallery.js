import React from 'react';
import PropTypes from 'prop-types';
import './gallery.css';

const Gallery = (props) => {
  const photos = props.photos || [];
  return (
    <div>
    {
      photos.length > 0
      ?
        photos.map((item) => (
          <div className="cell" key={item.id}>
            <div>
              <img src={item.image_url} title={item.name} />
            </div>
          </div>
        ))
      :
      <div>
        No results found.
      </div>
    }
    </div>
  );
};

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.any),
};

export default Gallery;
