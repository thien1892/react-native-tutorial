import { setStatusBarBackgroundColor } from "expo-status-bar";
import { Text, View, ScrollView, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export default function WellcomeScreen() {
    const [firstName, onChangeFirstName] = useState('');
    const [lastName, onChangeLastName] = useState('');
    const [email, onChangeEmail] = useState('');

    return(
        // <View >
        <ScrollView
            indicatorStyle={'white'}
            horizontal={false}
            style={welcomeStyles.container}>
                <Text style={welcomeStyles.headerText}>
                    Welcome to Little Lemon
                </Text>
                <Text style={welcomeStyles.innerText}>
                    Little Lemon is a charming neighborhood bistro that serves simple food 
                    and classic cocktails in a lively but casual environment.
                </Text>
                <TextInput
                style={welcomeStyles.inputText}
                value={firstName}
                onChangeText={onChangeFirstName}
                placeholder="First name"
                />
                <TextInput
                style={welcomeStyles.inputText}
                value={lastName}
                onChangeText={onChangeLastName}
                placeholder="First name"
                />
                <TextInput
                style={welcomeStyles.inputText}
                value={email}
                onChangeText={onChangeEmail}
                placeholder="First name"
                />
        </ScrollView>
        // </View>
    );
}

const welcomeStyles= StyleSheet.create({
    container: {
        paddingHorizontal:15,
    },
    headerText: {
        fontSize:40, 
        textAlign:'center', 
        color:'#EDEFEE', 
        paddingTop:30, 
        flexWrap:'wrap',
    },
    innerText: {
        fontSize:20, 
        textAlign:'center', 
        color:'#EDEFEE', 
        paddingVertical:30
    },
    inputText: {
        backgroundColor:'#EDEFEE',
        padding: 10,
        borderRadius: 20,
        fontSize: 20,
        borderWidth:3,
        borderColor: '#EE9972',
        marginVertical: 10,
    },
})