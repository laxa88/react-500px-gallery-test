import React from 'react';
import PropTypes from 'prop-types';

const Gallery = (props) => {
  console.log(props);
  const photos = props.photos;
  return (
    <ul>
    { photos.map((item) => (
      <li key={item.id}>
        <img src={item.image_url} alt={item.name} width='100' height='100' />
      </li>
    ))}
    </ul>
  );
};

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.any),
};

export default Gallery;
