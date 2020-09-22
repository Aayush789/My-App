import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import firebase from 'firebase';

export default class SearchScreen extends Component{
    render(){
        return(
            <View style= {{flex: 1, justigyContent: 'center',alignItems: 'center'}}>
                <Text>Search Screen</Text>
            </View>
        )
    }
} 