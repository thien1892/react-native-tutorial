import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/LittleLemonFooter';
import WellcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import MenuItemSections from './components/Section';
import FeedbackForm from './components/FeedbackForm';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      {/* <Text>Hello Thien!</Text> */}
      {/* <StatusBar style="auto" /> */}
      <LittleLemonHeader/>
      {/* <WellcomeScreen/> */}
      <FeedbackForm/>
      {/* <MenuItems/> */}
      {/* <MenuItemSections/> */}
      {/* <Footer/> */}
    </View>

    {/* <View style={styles.container}>
      <MenuItemSections/>
    </View> */}

    {/* <View style={{flex:1, backgroundColor:'gray'}}>
      <WellcomeScreen/>
    </View> */}

    {/* <View>
      <Footer/>
    </View> */}

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'#333333',
    // backgroundColor:'black',
  }
})