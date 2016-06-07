import React from 'react';
import { connect } from 'react-redux';

class Collection extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.collection.name}</h1>
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
