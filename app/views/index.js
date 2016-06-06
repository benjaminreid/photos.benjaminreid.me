import React from 'react';

import Collections from 'components/Collections';

function Index() {
  var data = [0, 1, 2, 3];

  return (
    <div>
      <Collections collections={data}></Collections>
    </div>
  );
}

export default Index;
