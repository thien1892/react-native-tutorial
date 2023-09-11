import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable } from 'react-native';

export default function LoginScreenPress() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [logIn, setLogIn] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {logIn ? <Text style={styles.regularText}>You are logged in!</Text>: null}
      {!logIn && (
        <>
        <Text style={styles.regularText}>Login to continue </Text>
        <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'email'}
        keyboardType={'email-address'}
      />
        <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={onChangePassword}
        placeholder={'password'}
        keyboardType={'default'}
        secureTextEntry={true}
      />
      </>
      )}
      <Pressable
        onPress={() => setLogIn(!logIn)}
        style = {styles.pressButton}
        >
        <Text style = {styles.textButton}>{!logIn ? "Log in" : "Log out"}</Text>
      </Pressable>
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
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  pressButton: {
    // borderColor: '#EDEFEE',
    // backgroundColor: '#EE9972',
    // padding: 10,
    // width: 100,
    // marginHorizontal: 'auto',
    // marginVertical: 8,
    // display: flex,
    // justifyContent: 'center',
    // justifyContent: 'flex-end',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  textButton : {
    textAlign: 'center',
    backgroundColor: '#EE9972',
    padding: 15,
    paddingHorizontal: 30,
    // width: 100,
    borderRadius: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: 18,
    marginVertical: 8,
    fontWeight: 'bold',
  },
});
