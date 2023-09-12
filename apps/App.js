import { StyleSheet, Text, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/LittleLemonFooter';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './components/tab-navigation/LoginScreen';
import WelcomeScreen from './components/tab-navigation/Welcome';



const Drawer = createDrawerNavigator ();

export default function App() {
  return (
  <NavigationContainer>
    <View style={styles.container}>
      <LittleLemonHeader/>
      <Drawer.Navigator 
        useLegacyImplementation
        initialRouteName="Login"
        >
        <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Home' }} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
      
    </View>

    <View style={styles.footerContainer}>
          <Footer />
    </View>

  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'#333333',
    // backgroundColor:'black',
  },
  footerContainer: { backgroundColor: '#333333' },
})