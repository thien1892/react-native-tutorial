import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
    return(
        <View style={headerStyles.container}>
            <Text style={headerStyles.innerText}>
                Little Lemon
            </Text>
        </View>
    );
}

const headerStyles = StyleSheet.create({
    container: {
        backgroundColor:'#EE9972',
    },
    innerText:{
        fontSize:30, 
        color:'black', 
        textAlign:'center', 
        paddingBottom:0, 
        padding:30,
    },
})