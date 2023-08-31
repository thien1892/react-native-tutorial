import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
    return(
        <View style={footerStyles.container}>
            <Text style={footerStyles.innerText}>
                All rights reserved by Little Lemon, 2023
            </Text>
        </View>
    )
}

const footerStyles = StyleSheet.create({
    container: {
        backgroundColor:'#EE9972', 
        marginBottom:10,
    },
    innerText: {
        color:'black', 
        fontWeight:'bold', 
        textAlign:'center', 
        padding:10,
        fontStyle:'italic',
    },
})