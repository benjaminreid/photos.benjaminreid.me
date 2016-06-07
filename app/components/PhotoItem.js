import React from 'react';
import classNames from 'classnames';
import styles from 'styles/components/photo-item';

function PhotoItem({ url }) {
  let base = classNames(styles.base);

  return (
    <div className={base}>
      {url}
    </div>
  );
}

PhotoItem.propTypes = {
  url: React.PropTypes.string.isRequired
};

export default PhotoItem;
