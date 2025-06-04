import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import globalStyle from '../Style/globalStyle';
import React, { useState } from 'react';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 40,
  },
  holderName: {
    fontSize: 18,
    color: 'black',
    marginBottom: 4,
  },
  inputName: {
    fontSize: 18,
    color: 'black',
    width: 200,
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    marginBottom: 20,
  },
  circleButton: {
    width : 80,
    height: 80,
    borderRadius:40,
    backgroundColor :'rgba(51, 90, 218, 0.5)',
    borderBottomColor :'black',
    borderWidth :1,
    justifyContent :'center',
    alignItems :'center',
    marginTop: 150,
  },
  buttonText: {
    color: 'black',
 
  }
});

export default function LoginScreen({ navigation }) {
  const [nameValue, setNameValue] = useState('');
  const [showName, setShowName] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={globalStyle.container}>
      <Text style={styles.title}>Login to know more</Text>
      <View style={{ alignItems: 'flex-start', marginLeft: -50, width: 250 }}>
        <Text style={styles.holderName}>Enter your name</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <TextInput
            placeholder=''
            placeholderTextColor='black'
            value={nameValue}
            onChangeText={setNameValue}
            secureTextEntry={!showName}
            style={[styles.inputName, { marginBottom: 0, width: 250 }]}
          />
          <TouchableOpacity onPress={() => setShowName(!showName)}>
            <Text style={{ fontSize: 20, marginLeft: 8 }}>
              {showName ? '👁️' : '🙈'}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.holderName}>Enter your password</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            placeholder=''
            placeholderTextColor='black'
            value={passwordValue}
            onChangeText={setPasswordValue}
            secureTextEntry={!showPassword}
            style={[styles.inputName, { marginBottom: 0, width: 250 }]}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={{ fontSize: 20, marginLeft: 8 }}>
              {showPassword ? '👁️' : '🙈'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.circleButton}
        onPress={() =>
          navigation.navigate('System')}>
        <Text style = {styles.buttonText}> log in</Text>
      </TouchableOpacity>
    </View>
  );
}