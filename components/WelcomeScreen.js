import { setStatusBarBackgroundColor } from "expo-status-bar";
import { Text, View, ScrollView, StyleSheet } from "react-native";

export default function WellcomeScreen() {
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
                    We would love to hear more about your experience with us!
                    Little Lemon is a charming neighborhood bistro that serves simple food 
                    and classic cocktails in a lively but casual environment.
                    We would love to hear more about your experience with us!
                    Little Lemon is a charming neighborhood bistro that serves simple food 
                    and classic cocktails in a lively but casual environment.
                    We would love to hear more about your experience with us!
                    Little Lemon is a charming neighborhood bistro that serves simple food 
                    and classic cocktails in a lively but casual environment. 
                    We would love to hear more about your experience with us!
                </Text>
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
})