import React, { Component } from 'react'
import {View, Text, StyleSheet, Platform, StatusBar, FlatList, TouchableOpacity} from 'react-native';
import Header from './Header'
import axios from 'axios'
import { NavigationParams } from 'react-navigation'
import PassageItem from './PassageItem'


// class PassagesScreen extends React.Component<Props, State> {
class PassagesScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            details: [],
            category: ''
        }
        console.log("Props passed to PassageScreen:",props.route) // check props that were passed down to this component
        // console.log(props.navigation.getParam('id'))
    }

componentDidMount() {
    this.getPassagesByCategory()
    this.setCategory()
}


getPassagesByCategory() {
    const { params } = this.props.route
    axios.get(`http://localhost:3001/api/categories/${params.id}/passages?filter[order]=passageLocation%20ASC`)
    .then(response => {
        this.setState({details: response.data}, () => {
            // console.log(this.state)
        })
    })
    .catch(err => console.log)
}



setCategory() {
    const { params } = this.props.route
    axios.get(`http://localhost:3001/api/categories/${params.id}`)
    .then(response => {
        this.setState({category: response.data}, () => {
            // console.log(this.state)
        })
    })
    .catch(err => console.log)
}

    render(){
        // console.log(this.state.details)
        return (
            // <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.container}>
            <Header title={this.state.category.categoryName} />
                {/* <Text style={styles.headerText}>Verse About "{this.state.category.categoryName}"{"\n"}</Text> */}
              <FlatList 
                data={this.state.details} 
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <PassageItem item={item}/>}
               // renderItem={({item}) => 
                // <Text style={styles.categoryItemText}>{item.passageText} 
                //     {"\n"}{item.passageLocation}{"\n"}</Text>}
              />
            </View>
            // {/* </TouchableOpacity> */}
          )
    }
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

export default PassagesScreen