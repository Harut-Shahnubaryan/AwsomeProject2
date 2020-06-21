import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Button} from 'react-native';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.goScreen2 = this.goScreen2.bind(this);
  }

  goScreen2() {
    this.props.navigation.navigate("Screen3")
  }

  render() {
    return <Button title="Edit" onPress={this.goScreen2} />;
  }
}

const styles = StyleSheet.create({});
