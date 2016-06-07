import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import styles from 'styles/components/photo-item';

function PhotoItem({ link, url }) {
  let base = classNames(styles.base);
  var image;

  if (link) {
    image = <Link to={link}><img src={url}/></Link>;
  } else {
    image = <img src={url}/>;
  }

  return (
    <div className={base}>
      {image}
    </div>
  );
}

PhotoItem.propTypes = {
  url: React.PropTypes.string.isRequired
};

export default PhotoItem;
