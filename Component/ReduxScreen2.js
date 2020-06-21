import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {Images, IMAGES_BLOCK, albums} from '../Actions/Reducer';

class ReduxScreen2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View>
        <Image
          source={{uri: this.props.elem}}
          style={{width: 100, height: 100}}
          resizeMode="cover"
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    arr: state.arr,
    elem: state.selected.elem,
    index: state.index,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    albums: (elem,i) => dispatch(albums(elem,i)),
  };
}

const styles = StyleSheet.create({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxScreen2);
