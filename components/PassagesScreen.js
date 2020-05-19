import React, { Component } from 'react'
import {View, Text, StyleSheet, Platform, StatusBar, FlatList} from 'react-native';
import Header from './Header'
import axios from 'axios'


class PassagesScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            details: [],
            category: ''
        }
        console.log("Props passed to PassageScreen:",props) // check props that were passed down to this component
    }

componentDidMount() {
    this.getPassagesByCategory()
    this.setCategory()
}


getPassagesByCategory() {
    const { params } = this.props.navigation.state
    axios.get(`http://localhost:3001/api/categories/${params.id}/passages`)
    .then(response => {
        this.setState({details: response.data}, () => {
            // console.log(this.state)
        })
    })
    .catch(err => console.log)
}



setCategory() {
    const { params } = this.props.navigation.state
    axios.get(`http://localhost:3001/api/categories/${params.id}`)
    .then(response => {
        this.setState({category: response.data}, () => {
            // console.log(this.state)
        })
    })
    .catch(err => console.log)
}

    render(){

        return (
            <View style={styles.container}>
              <Header />
              <FlatList 
                data={this.state.details} 
                renderItem={({pitem}) => <CategoryItem item={pitem}/>}
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


// export default CategoryDetailsPage

// const PassagesScreen = (props) => (
//     <View>
//     <Text>HelloWorld</Text>
//     </View>
//   )

export default PassagesScreen