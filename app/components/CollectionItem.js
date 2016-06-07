import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import styles from 'styles/components/collection-item';

function CollectionItem({ name, id }) {
  let base = classNames(styles.base);

  return (
    <div className={base}>
      <p>Collection: {name}</p>
      <Link to={`/collection/${id}`}>View collection</Link>
    </div>
  );
}

CollectionItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired
};

export default CollectionItem;
