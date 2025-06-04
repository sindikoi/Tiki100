
import { createNativeStackNavigator } from  '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import { StatusBar  } from 'expo-status-bar';

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Welcome" component = {WelcomeScreen}/>
        <Stack.Screen name = "Login" component = {LoginScreen}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
 
  );
}

