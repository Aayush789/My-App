import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import LoginScreen from '../screens/LoginScreen'

export const AppDrawerNavigator= createDrawerNavigator({
    Login:{
        screen: LoginScreen
    }
},
{ 
    initialRouteName: 'Home'


})
