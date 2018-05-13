import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actions';

class Image extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.data.id);
  }

  render() {
    const { data } = this.props;
    return (
      <div className="grid-image">
        <img src={data.avatar} />
        <div className="overlay">
          <button onClick={() => {
            this.props.updateImage({...data, draft: !data.draft})
          }} >{data.draft ? 'Unlike' : 'Like'}</button>
        </div>
        {
          data.draft && <div>Liked</div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: state && state.data && state.data.images[ownProps.id] || []
});

// Actions
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Image);
