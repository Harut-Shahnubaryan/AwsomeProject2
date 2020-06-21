import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {SELECTED_IMAGE, IMAGES_BLOCK, Images, albums} from '../Actions/Reducer';
import {} from '../Actions/Reducer';

class ReduxScreen1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumImages: this.props.route.params.albumImages,
    };

    this.navigate = this.navigate.bind(this);
  }

  componentDidMount() {}

  navigate(elem, i) {

    this.setState({index: i});
    this.props.albums(elem, i);
    // this.props.navigation.navigate('ReduxScreen2');
  }

  render() {
    return (
      <View style={{width: 100, height: 100}}>
        {this.state.albumImages.map((elem, i) => {

          return (
            <TouchableOpacity
              onPress={this.navigate.bind(this, elem, i)}
              key={i}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: '100%', height: 100}}
                resizeMode="cover"
                source={{uri: elem}}
              />
              {this.state.index === i ? (
                <View style={styles.selectedImage}>
                  <Text>1</Text>
                </View>
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    arr: state.arr,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    albums: (elem, i) => dispatch(albums(elem, i)),
  };
}

const styles = StyleSheet.create({
  selectedImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxScreen1);
