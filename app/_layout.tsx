import { Stack} from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import { Shadow } from "react-native-shadow-2"
import { Platform } from "react-native";


export default function RootLayout() {
  return (

    <View style={[styles.mainBackGround]}>
        <View style={[styles.header]}></View>    

        <Stack screenOptions={{ headerShown: false}} />


        <View style={[styles.footer]}></View>    
    </View>
  )
}


const styles = StyleSheet.create({

  mainBackGround : {
    flex : 1,
    backgroundColor : "#d9d9d9",
    position : "relative"
  },

  header : {
    width : "100%",
    height : "12%",
    backgroundColor : "black",
  },

  footer : {
    width : "100%",
    height : "12%",
    backgroundColor : "black",
    position : "absolute",
    bottom : 0
  },

  border1 : {
    padding: 20,
    borderWidth: 2,       // Border thickness
    borderColor: 'd9d9d9',  // Border color
    borderRadius: 10,     // Rounded corners (optional)
  },
})
