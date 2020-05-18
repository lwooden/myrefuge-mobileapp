import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CategoryItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.categoryItem}>
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