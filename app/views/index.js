import React from 'react';
import { connect } from 'react-redux';

import Collections from 'components/Collections';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Collections collections={this.props.collections}></Collections>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collections: state.collections
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
