import { connect } from 'react-redux';
import IndexView from 'views/IndexView';

const mapStateToProps = (state) => {
  return {
    collections: state.collections
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexView);
