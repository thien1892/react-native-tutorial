import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/LittleLemonFooter';
import WelcomeScreen from './components/tab-navigation/Welcome';
import LoginScreen from './components/tab-navigation/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';

import MenuItems from './components/MenuItems';
import MenuItemSections from './components/Section';
import FeedbackForm from './components/FeedbackForm';

import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Drawer.Navigator 
            // useLegacyImplementation
            initialRouteName="Login"
            screenOptions={{ 
              drawerPosition: 'left',
              drawerActiveTintColor: 'red',
              drawerInactiveTintColor: 'green',
              // headerTitleAlign: 'center',
              // headerShown:false,
              // headerLeft: false,
              // headerRight: () => <DrawerToggleButton />,
              drawerIcon: ({ focused, color, size }) => <Ionicons color={color} size={size} name={focused ? 'heart' : 'heart-outline'} />,
              }}
            >
            <Drawer.Screen name="Welcome" component={WelcomeScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Feedback" component={FeedbackForm} />
            <Drawer.Screen name="Menu Item" component={MenuItems} />
            <Drawer.Screen name="Menu Items Sections" component={MenuItemSections} />
          </Drawer.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <Footer />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});