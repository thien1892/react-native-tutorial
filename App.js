import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/LittleLemonFooter';
import WellcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import MenuItemSections from './components/Section';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';
import LoginScreenPress from './components/Pressable-component';
import WelcomeScreenImageComponent from './components/ImageComponent';
import WelcomeScreenUseHook from './components/WelcomUseHook';
import LoginScreenRoutes from './components/set-up-routes/Login';
import WelcomeScreenRoutes from './components/set-up-routes/Welcome';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <View style={styles.container}>
      <LittleLemonHeader/>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{ 
          headerStyle: { backgroundColor: '#fff' },
          headerTitleStyle: { fontWeight: 'bold'},
          // headerTintColor: '#333333',
          headerTitleAlign: 'center',
        }}
        >
        <Stack.Screen name="Welcome" component={WelcomeScreenRoutes} options={{ title: 'Home' }} />
        <Stack.Screen name="Login" component={LoginScreenRoutes} />
      </Stack.Navigator>
    </View>

    <View>
      <Footer/>
    </View>

  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'#333333',
    // backgroundColor:'black',
  }
})