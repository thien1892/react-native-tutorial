import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/LittleLemonFooter';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './components/tab-navigation/LoginScreen';
import WelcomeScreen from './components/tab-navigation/Welcome';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <View style={styles.container}>
      <LittleLemonHeader/>
      <Tab.Navigator 
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Welcome') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Login') {
              iconName =  'log-in';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerTintColor: 'red',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: 'bold'},
          tabBarStyle: {backgroundColor: '#EDEFEE',},
        })}
        >
        <Tab.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Home' }} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
      
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