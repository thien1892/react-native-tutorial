import * as React from 'react';
import { ScrollView, Text, StyleSheet, Image, View } from 'react-native';

export default function WelcomeScreenImageComponent() {
  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
        <View style= {styles.containerImg}>
            <Image
                source={require('../assets/img/logo.png')}
                resizeMode='cover'
                accessible={true}
                accessibilityLabel={'Little Lemon Logo'}
                style = {styles.img}
                />
            <Text style={styles.logoText}>
                Little Lemon
            </Text>
        </View>
        {/* <Image
            source={require('../assets/img/logo.png')}
            resizeMode='contain'
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'}
            style = {styles.img}
            />
        <Text style={styles.logoText}>
            Little Lemon
        </Text> */}

        
        {/* <Text style={styles.headerText}>Welcome to Little Lemon</Text> */}
        <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
        </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 8,
  },
  containerImg : {
    // display: flex,
    // justifyContent: 'space-between',
    justifyContent: 'center',
    flexDirection:'row',
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical:10,
  },
  logoText : {
    fontSize: 25,
    fontWeight: 'bold',
    color:'#EDEFEE',
    textAlign: 'center',
    marginLeft: 18,
  }
});
