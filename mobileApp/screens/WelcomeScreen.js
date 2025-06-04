import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { TouchableHighlight } from 'react-native';
import globalStyle from '../Style/globalStyle';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={globalStyle.container}>
      <Text style={styles.title}> Welcome to Tiki100 </Text>
      <Text style={styles.subtitle}>Redefining Female Bladder Health</Text>
      <Image
        source={require('../assets/tiki.jpeg')}
        style={styles.image}
      />
      <TouchableHighlight style={styles.circleButton}
        onPress={() =>
          navigation.navigate('Login')}>
        <Text style = {styles.buttonText}> press me</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 24,
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 20,
    marginTop: 40,

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