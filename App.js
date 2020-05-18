import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Platform, StatusBar, FlatList} from 'react-native';
import Header from './components/Header'
import CategoryItem from './components/CategoryItem'
import axios from 'axios'

class App extends React.Component {
  
  constructor(props) {
    super(props)

  this.state = {
    categories: []
  }
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



export default App
