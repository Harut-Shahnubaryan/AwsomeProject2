import React from 'react';
import {StyleSheet, View,TouchableOpacity,Text, BackHandler} from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.goForward = this.goForward.bind(this)
  }


  goForward(){
    this.props.navigation.navigate("Screen3")
  }

  render() {
    return (
      <View>
        <View style={{width: '100%', height: 100, backgroundColor: 'black'}} />
        <TouchableOpacity onPress={this.goForward}>
          <View style={{width: '100%', height: 40, backgroundColor: 'grey'}}>
            <Text style={{textAlign: 'center', color: 'white'}}>
              Go Forward
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
