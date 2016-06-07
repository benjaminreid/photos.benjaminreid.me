import React from 'react';
import classNames from 'classnames';
import styles from 'styles/components/lightbox';

function Lightbox({ url }) {
  let base = classNames(styles.base);

  return (
    <div className={base}>
      <img src={url}/>
    </div>
  );
}

Lightbox.propTypes = {
  url: React.PropTypes.string.isRequired
};

export default Lightbox;
