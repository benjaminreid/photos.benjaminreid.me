import React from 'react';
import classNames from 'classnames';
import styles from 'styles/components/collection-item';

function CollectionItem({ name }) {
  let base = classNames(styles.base);

  return (
    <div className={base}>
      <p>Collection: {name}</p>
    </div>
  );
}

CollectionItem.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default CollectionItem;
