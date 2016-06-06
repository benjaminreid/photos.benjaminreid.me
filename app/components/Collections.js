import React from 'react';

import CollectionItem from 'components/CollectionItem';

function Collections({ collections }) {
  var $collections = collections.map((props, key) => {
    return <CollectionItem {...props} key={key}/>
  });

  return (
    <div>
      {$collections}
    </div>
  );
}

export default Collections;
