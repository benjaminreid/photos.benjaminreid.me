import React from 'react';

import CollectionItem from 'components/CollectionItem';

function Collections({ collections }) {
  var $collections = collections.map((id, key) => {
    return <CollectionItem key={key} id={id} />
  });

  return (
    <div>
      {$collections}
    </div>
  );
}

export default Collections;
