import React from 'react';
import { browserHistory } from 'react-router';
import classNames from 'classnames';
import styles from 'styles/components/lightbox';

function Lightbox({ url }) {
  let base = classNames(styles.base);

  return (
    <div className={base} onClick={browserHistory.goBack}>
      <img src={url}/>
    </div>
  );
}

Lightbox.propTypes = {
  url: React.PropTypes.string.isRequired
};

export default Lightbox;
