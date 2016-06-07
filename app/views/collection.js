import React from 'react';
import { connect } from 'react-redux';
import Photos from 'components/Photos';

class Collection extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.collection.name}</h1>
        <Photos photos={[{ url: 'foo' }, { url: 'bar' }]}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const collection = state.collections.filter((collection) => {
    return collection.id == ownProps.params.collectionId;
  })[0];

  return {
    collection
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
