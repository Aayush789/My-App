import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Keyboard, KeyboardAvoidingView, TextInput } from 'react-native';
import firebase from 'firebase';
import db from '../Config'

export default class LoginScreen extends Component{
    constructor(){
        super();
        this.state={
            userId: '',
            password:'',
        }
    }

    login= async(userId,password)=>{
        if(userId && password){
            try{
                const response= await firebase.auth().signInWithEmailAndPassword(userId, password)
                if(response){
                    this.props.navigation.navigate('HomeScreen')
                    alert('Login Successfully')
                }
            }

            catch(error){
                alert("invalid userId or password")
            }
        }

        else{
            alert('enter userId and password')
        }
    }

    render(){
        return(

            <KeyboardAvoidingView style= {{alignItems: 'center', marginTop: 20}}>
                  
                <View>
                <TextInput style={styles.loginBox}
                placeholder= "userId"
                placeHolderTextColor= "#ffff"
                onChangeText= {(text)=>{
                    this.setState({
                        userId:text
                    })
                }}/>

            <TextInput style={styles.loginBox}
                placeholder= "password"
                placeholderTextColor= "#ffff"
                secureTextEntry={true}
                onChangeText= {(text)=>{
                    this.setState({
                        password:text
                    })
                }}/> 

                <TouchableOpacity 
                style= {{height: 30, width: 90, borderWidth: 1, marginTop: 20, paddingTop: 5, borderRadius: 7}}
                onPress= {()=>{this.login(this.state.userId,this.state.password)}}>
                 <Text style= {{textAlign: 'center'}}>Login</Text>
                </TouchableOpacity>
                
                </View>

                </KeyboardAvoidingView>
            
        )
    }
}

const styles= StyleSheet.create({
  loginBox: {
      width: 300,
      height: 40,
      borderWidth: 1.5,
      fontSize: 20,
      margin: 10,
      paddingLeft: 10 
  }
    
})



