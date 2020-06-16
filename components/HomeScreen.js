import 'react-native-gesture-handler';
import React, {useState, useEffect, useReducer} from 'react';
import {View, Text, StyleSheet, Platform, StatusBar, FlatList} from 'react-native';
import Header from './Header'
import CategoryItem from './CategoryItem'
import axios from 'axios'
import { CardAnimationContext } from '@react-navigation/stack';

const API_URL = "myRefuge-ALB-742005193.us-east-1.elb.amazonaws.com"

// 'http://localhost:3001/api/categories?filter[order]=categoryName%20ASC'

const HomeScreen = () => {

    const [categories, setCategories] = useState([])


useEffect(() => {
    getCategories()
})

const getCategories = () => {
    axios.get(`http://${API_URL}/api/categories?filter[order]=categoryName%20ASC`)
    .then(response => {
        setCategories(response.data)
    })
}

    return (
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={categories} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <CategoryItem item={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0
  }

})




export default HomeScreen