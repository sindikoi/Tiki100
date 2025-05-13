import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native';

export default function LoginScreen() {
    const [ inputValueName, setInputValueName] = useState('');
    const [ inputValuePassword, setInputValuePassword] = useState('');
    const [ showPassword, setShowPassword] = useState(false);
    const [ showUserName ,setUserName] = useState(false);
    
    return (
        <ScrollView contentContainerStyle = {styles.container} >
            <Text style = {styles.title} > Sign In</Text>
            <View style = {styles.testContainer}>
            <Text style = {styles.infoText} > Please Enter Your username and password in the fields below
             </Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.nameText}>Username</Text>
                <View style = {{ flexDirection :'row' ,alignItems :'center'}}>
                <TextInput style={styles.nameValue} 
                placeholder = 'Enter your username'
                value = {inputValueName}
                onChangeText={setInputValueName}
                secureTextEntry = {!showUserName}
                />
                <TouchableOpacity onPress = { () => setUserName(!showUserName)}>
                <Text style = {{ color : 'black' }} > {showUserName ? 'Hide' : 'Show'} </Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.nameText}>Password</Text>
                <View style = {{ flexDirection :'row',alignItems :'center' }}>
                <TextInput style={styles.passwordValue}
                placeholder='Enter your password'
                value = {inputValuePassword}
                onChangeText={setInputValuePassword}
                secureTextEntry = {!showPassword}
                />
                <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}  >
                    <Text style = {{ color : 'black' }} > {showPassword ? 'Hide' : 'Show'} </Text>
                </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity> 
            <Text style ={styles.forgetPassword}> Forget password? click here</Text>
            </TouchableOpacity>
           
        </ScrollView>
    )
    
}

 const styles = StyleSheet.create({
       container : {
        flex :1,
        alignItems : 'center',
        backgroundColor :  'white',
    },
    title: {
        fontSize : 30,
        marginTop: 30,
        marginBottom:20,
        color:'#1a1a1a',
        textAlign:'center',
        fontWeight : 'bold',
    },
    infoText : {
        fontSize :18,
        color : '#1a1a1a',
        marginBottom : 20,
        textAlign : 'center',
        lineHeight : 25,
    },
    testContainer :{
        width: '90%',
    },
    inputContainer: {
        width: '80%',
        marginBottom: 20,
    },
    nameValue: {
        flex: 1,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    passwordValue:{
        flex :1,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    nameText :{
        fontSize:18,
        color: 'black',
        marginBottom: 5,
    },
    forgetPassword : {
        fontSize:18,
        color: 'black',
        padding:10,
        textDecorationLine : 'underline',

    },

})
