import React, { Component, useState, useEffect, useContext } from 'react'
import {View, Text, StyleSheet, Platform, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import Header from './Header'
import axios from 'axios'
import { NavigationParams } from 'react-navigation'
import PassageItem from './PassageItem'

// needs access to "routes" prop but can't get it as a functional component due to where it 
// cant use context api because there can only be one root element which will impact styling


const PassagesScreen2 = ({props}) => {

    const [details, detailsdispatch] = useState([])
    const [category, catdispatch] = useState('')

        console.log("Props passed to PassageScreen:",props) // check props that were passed down to this component
        // console.log(props.navigation.getParam('id'))
    


    useEffect(() => {
        getPassagesByCategory()
        setCategory()
    })

    const getPassagesByCategory = () => {
        const { params } = props.route
        axios.get(`http://localhost:3001/api/categories/${params.id}/passages?filter[order]=passageLocation%20ASC`)
        .then(response => {
            setState({details: response.data}, () => {
                console.log(details)
            })
        })
        .catch(err => console.log)
    }
     
    
    const setCategory = () => {
        const { params } = props.route
        axios.get(`http://localhost:3001/api/categories/${params.id}`)
        .then(response => {
            setState({category: response.data}, () => {
                console.log(category)
            })
        })
        .catch(err => console.log)
    }



        return (
            <View style={styles.container}>
            <Header title={category.categoryName} />
              <FlatList 
                data={details} 
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <PassageItem item={item}/>}
              />
            </View>
          )
    }



  const styles = StyleSheet.create({
    categoryItem: {
        padding: 15,
        backgroundColor: '#f8f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    categoryItemView: {
        flexDirection: 'row',
    },
    categoryItemText : {
        fontSize: 18,
    },
    headerText : {
        fontSize: 24,
        backgroundColor: '#f8f8f8f8'
    },
    container: {
        flex: 1,
        paddingTop: 0
      }


})

export default PassagesScreen2