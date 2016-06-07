import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Photos from 'components/Photos';
import Lightbox from 'components/Lightbox';

class CollectionView extends React.Component {
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
        <Link to='/'>Back to collections</Link>
        <h1>{this.props.collection.name}</h1>
        <Photos photos={this.props.photos}/>
        {this.renderLightbox()}
      </div>
    );
  }
}

export default CollectionView;
