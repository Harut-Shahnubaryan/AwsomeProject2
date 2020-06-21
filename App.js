/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';

// import Home from './Component/Home';
// import Screen1 from './Component/Screen1';
// import Screen2 from './Component/Screen2';
// import Screen3 from './Component/Screen3';
// import Edit from './Component/Edit';

// import React from 'react';
// import {} from 'react-native';


// const Stack = createStackNavigator();
// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Screen1" component={Screen1} />
//       <Stack.Screen name="Screen2" component={Screen2} />
//       <Stack.Screen name="Screen3" component={Screen3} />
//     </Stack.Navigator>
//   );
// }

// function SettingsScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Edit" component={Edit} />
//     </Stack.Navigator>
//   );
// }

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="MyStack" component={MyStack} />
//       <Tab.Screen name="Edit" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <MyTabs />
//       </NavigationContainer>
//     </Provider>
//   );
// }

// REDUX

import React, { Component } from 'react';
import {} from 'react-native';

import {Provider} from 'react-redux';
import MyFirstReduxHome from "./Component/MyFirstReduxHome";
import ReduxScreen1 from "./Component/ReduxScreen1";
import ReduxScreen2 from "./Component/ReduxScreen2";

import {store} from "./Actions/Reducer"
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyFirstReduxHome" component={MyFirstReduxHome} />
      <Stack.Screen name="ReduxScreen1" component={ReduxScreen1} />
      <Stack.Screen name="ReduxScreen2" component={ReduxScreen2} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
        </NavigationContainer>
    </Provider>
  );
}