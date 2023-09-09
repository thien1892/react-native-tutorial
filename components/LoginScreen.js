import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import { useState } from 'react';

export default function LoginScreen() {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <ScrollView 
        // style={styles.container}
        >
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput
                placeholder='email'
                // secureTextEntry = {true}
                keyboardType='email-address'
                style = {styles.inputText}
                value={email}
                onChange={onChangeEmail}
                clearButtonMode={'always'}
                // onFocus={() => Alert.alert('First name is focused!')}
                // onBlur={() => Alert.alert('First name is blurred!!')}
            />
            <TextInput
                placeholder='password'
                secureTextEntry = {true}
                // keyboardType='visible-password'
                style = {styles.inputText}
                value={password}
                onChange={onChangePassword}
            />
        </ScrollView>
    </KeyboardAvoidingView>
    
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
  inputText: {
    fontSize: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
  },
});