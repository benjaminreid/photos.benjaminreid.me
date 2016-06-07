import React from 'react';
import PhotoItem from 'components/PhotoItem';

function Photos({ photos }) {
  var $photos = photos.map((props, key) => {
    return <PhotoItem {...props} key={key}/>
  });

  return (
    <div>
      {$photos}
    </div>
  );
}

Photos.propTypes = {
  photos: React.PropTypes.array.isRequired
};

export default Photos;
