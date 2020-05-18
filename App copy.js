import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Platform, StatusBar, FlatList} from 'react-native';
import Header from './components/Header'
import CategoryItem from './components/CategoryItem'
import axios from 'axios'

class App extends React.Component {
  
  constructor(props) {
    super(props)

  //   this.state = {
  //     items: [
  //     {id: "1", name: 'Love'}, 
  //     {id: "2", name: 'Pride'}, 
  //     {id: "3", name: 'Fear'}, 
  //     {id: "4", name: 'Marriage'}
  //   ]
  // }

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
          // console.log(this.state)
      })
  })
}

  render() {
    const categoryList = this.state.categories.map((category, i) => {
      return(
          <CategoryItem key={category.id} item={category} />
      )
  })
    return (
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={categoryList} 
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
