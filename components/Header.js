import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.title || "My Refuge"}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        height: 60,
        padding: 15,
        backgroundColor: 'black',
    },
    text: {
        color: '#fff',
        fontSize: 23,
        fontWeight: "bold",
        textAlign: "center"
    }


})

export default Header