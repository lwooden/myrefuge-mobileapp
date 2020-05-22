import 'react-native-gesture-handler';
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Platform, StatusBar, FlatList} from 'react-native';
import Header from './Header'
import CategoryItem from './CategoryItem'
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class HomePage extends React.Component {
  
  constructor(props) {
    super(props)

  this.state = {
    categories: []
  }
  console.log(props)
}

componentDidMount() {
  this.getCategories()
}

getCategories() {
  axios.get('http://localhost:3001/api/categories')
  .then(response => {
      this.setState({categories: response.data}, () => {
          console.log(this.state)
      })
  })
}


  render() {

    return (
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={this.state.categories} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <CategoryItem item={item}/>}
      />
    </View>
  )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }

})



export default HomePage
