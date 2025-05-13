import { Image, StyleSheet, Platform,Text,TouchableOpacity,View,Dimensions,} from "react-native";
const  { width, height } = Dimensions.get('window');
import { useRouter } from 'expo-router';
import React from 'react';

export default function HomeScreen() {
  const router = useRouter();

  return (

    <View style ={styles.container} >
    <Image source={require('../assets/images/tiki100.png')}
    style={styles.logo}
    />
    <View style ={styles.descriptionContainer}>
    <Text style = {styles.welcomeText}> Welcome to our app, we are here for you! </Text>  
    <Text style ={styles.description}> 
        Our app is designed to help you manage incontinence and live a
         high-quality life easily, comfortably, and discreetly.
             </Text>    
    </View>
    
    <TouchableOpacity style ={styles.loginButton} onPress={() => router.push('/login')}>
    <Text style ={styles.buttonText}> Get Started</Text>
    </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    paddingTop: Platform.OS =='ios' ? height * 0.08 : height * 0.05,
    backgroundColor:  'white',
  },
  logo: {
    width: '90%',
    height: 100,
    resizeMode: 'cover',
    borderBottomLeftRadius: 30,  
    borderBottomRightRadius: 30,  
  },
  title:{
    fontSize:width * 0.07,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom:15,
    color:'#1a1a1a',
    textAlign:'center',
    letterSpacing:1,
  },
  descriptionContainer: {
    width: '100%',
    paddingHorizontal: 30,
    paddingTop:20,
    alignItems: 'flex-start',
  
},
description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 50,
    color: '#4a4a4a',
    textAlign: 'left',
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginTop: 'auto',
    marginBottom: 100,
    borderRadius: 25,
    elevation: 5,          
    shadowColor: '#000',   
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  welcomeText:{
    fontSize:16,
    color:'#4a4a4a',
  }
 });
