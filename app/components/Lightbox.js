import React from 'react';
import classNames from 'classnames';
import styles from 'styles/components/lightbox';

function Lightbox() {
  let base = classNames(styles.base);

  return (
    <div className={base}>
      Lightbox
    </div>
  );
}

Lightbox.propTypes = {
};

export default Lightbox;
