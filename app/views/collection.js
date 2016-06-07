import React from 'react';
import { connect } from 'react-redux';
import Photos from 'components/Photos';
import Lightbox from 'components/Lightbox';

class Collection extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.collection.name}</h1>
        <Photos photos={this.props.photos}/>
        <Lightbox/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const collection = state.collections.filter((collection) => {
    return collection.id == ownProps.params.collectionId;
  })[0];

  const photos = state.photos.filter((photo) => {
    return photo.collection_id == collection.id;
  });

  return {
    collection,
    photos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
