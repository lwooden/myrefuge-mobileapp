import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoryItem = ({item}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity  
            onPress={() => navigation.navigate('Passages', item)}
            style={styles.categoryItem}>
            <View style={styles.categoryItemView}>
            <Text style={styles.categoryItemText}>{item.categoryName}</Text>
            </View>
        </TouchableOpacity>
    );
};

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
    }


})

export default CategoryItem

// onPress={() => navigation.navigate('Passages')

// onPress={() => {
//     alert('You tapped the button!');
//   }} 


