import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Modal,
} from 'react-native';
import {connect} from 'react-redux';
import {INCREASE_COUNTER,  DECREASE_COUNTER, selectedImages, IMAGES_BLOCK} from '../Actions/Reducer';

//  class MyFirstReduxCounter extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     counter: 0,
//   };
// }

//   increase(){
//     this.setState({counter:this.state.counter + 1})
//   }

//   decrease(){
//     this.setState({counter:this.state.counter - 1})
//   }

//   multiple(){
//     this.navigate()
//     this.props.increase()
//   }

//   navigate(){
//     this.props.navigation.navigate("ReduxScreen2")
//   }

//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <TouchableOpacity onPress={()=>this.multiple()}>
//           <Text style={{fontSize: 30}}>Increase</Text>
//         </TouchableOpacity>
//         <Text style={{fontSize: 30}}>{this.props.counter}</Text>
//         <TouchableOpacity onPress={()=>this.props.decrease()}>
//           <Text style={{fontSize: 30}}>Decrease</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// function mapStateToProps(state){
//   return {
//       counter:state.counter
//   }
// }

// function mapDispatchToProps(dispacth){
//   return {
//       increase: ()=> dispacth({type:INCREASE_COUNTER}),
//       decrease: ()=> dispacth({type:DECREASE_COUNTER})
//   }
// }

class MyFirstReduxCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalImageUri: '',
    };
    this.navigate = this.navigate.bind(this);
  }

  componentDidMount() {}

  navigate(elem, i) {
    this.props.navigation.navigate('ReduxScreen1', {
      albumImages: elem,
      albumIndex: i,
    });
  }

  _onLongPress(album, i) {
    this.setState({modalVisible: true, modalImageUri: album[0]});
  }

  navigate(elem, i) {
    this.props.navigation.navigate('ReduxScreen1',{
      albumImages:elem.album,
      albumIndex:i
    });
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          style = {styles.modal}
        />
        <View style={{flexDirection: 'row'}}>
          {this.props.arr.map((elem, i) => {
            return (
              <TouchableOpacity
                onLongPress = {this._onLongPress.bind(this,elem.album,i)}
                key={i}
                onPress={this.navigate.bind(this, elem, i)}>
                <View
                  style={{
                    margin: 5,
                  }}>
                  <Image
                    source={{uri: elem.album[0]}}
                    style={{width: 100, height: 100,}}
                    resizeMode="cover"
                  />
                </View>
                <Text style={{marginLeft: 5}}>{elem.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }


}

function mapStateToProps(state) {
  return {
    arr: state.arr,
  };
}

const mapDispatchToProps = {
  selectedImages,
};

const styles = StyleSheet.create({
  modal: {
    height: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 14,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyFirstReduxCounter);
