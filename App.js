import 'react-native-gesture-handler';
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Platform, StatusBar, FlatList} from 'react-native';
import Header from './components/Header'
// import HomePage from './components/HomePage'
import HomeScreen from './components/HomeScreen'
import CategoryItem from './components/CategoryItem'
import PassagesScreen from './components/PassagesScreen'
// import PassageScreen2 from './components/PassageScreen2'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class App extends React.Component {
  
  constructor(props) {
    super(props)

  // this.state = {
  //   categories: []
  // }



}

// componentDidMount() {
//   this.getCategories()
// }

// getCategories() {
//   axios.get('http://localhost:3001/api/categories')
//   .then(response => {
//       this.setState({categories: response.data}, () => {
//           console.log(this.state)
//       })
//   })
// }


  render() {
    const Stack = createStackNavigator();

    return (
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
    <Stack.Screen name="Passages" component={PassagesScreen} options={{ title: 'Passages' }} />
    </Stack.Navigator>
    </NavigationContainer>
  )
 }
}

export default App
