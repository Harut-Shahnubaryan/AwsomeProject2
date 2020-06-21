import React from 'react';
import {StyleSheet, View,TouchableOpacity,Text} from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

componentDidMount(){

}

  render() {
    return (
      <View>
        <View style={{width: '100%', height: 100, backgroundColor: 'purple'}} />
        <TouchableOpacity onPress={this.goForward}>
          <View style={{width: '100%', height: 40, backgroundColor: 'cyan'}}>
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
