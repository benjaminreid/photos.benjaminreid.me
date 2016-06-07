import React from 'react';
import { connect } from 'react-redux';
import Photos from 'components/Photos';
import Lightbox from 'components/Lightbox';

class Collection extends React.Component {
  renderLightbox() {
    const id = this.props.params.photoId;

    if (id) {
      const photo = this.props.photos.filter((photo) => {
        return photo.id == id;
      })[0];

      return <Lightbox url={photo.large_url}/>;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.collection.name}</h1>
        <Photos photos={this.props.photos}/>
        {this.renderLightbox()}
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
