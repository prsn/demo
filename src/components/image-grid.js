import React from 'react';
import ReactDOM from 'react-dom';
import Image from './image';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actions';

class ImageGrid extends React.Component {
  componentDidMount() {
    this.props.setImages();
  }
  render() {
    const { data = {} } = this.props;
    console.log('rendering grid componenet...', Object.keys(data).length);
    return (
      <div>
        {
          Object.values(data).map((data) => {
            return <Image key={data.id} data={data} id={data.id}/>
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state && state.data && state.data.images || {}
});

// Actions
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
