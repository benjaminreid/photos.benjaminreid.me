import { connect } from 'react-redux';
import IndexView from 'views/IndexView';
import { getCollections } from 'actions/collections';

const mapStateToProps = (state) => {
  return {
    collections: state.collections
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCollections() {
      dispatch(getCollections());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexView);
