import { connect } from 'react-redux';
import CollectionView from 'views/CollectionView';

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

export default connect(mapStateToProps, mapDispatchToProps)(CollectionView);
