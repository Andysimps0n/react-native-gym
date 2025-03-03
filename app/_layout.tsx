import { Stack} from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import { Shadow } from "react-native-shadow-2"
import { Platform } from "react-native";


export default function RootLayout() {
  return (

    <View style={{flex : 1}}>


        <View style={[styles.header, styles.shadow]}></View>    

      <Stack screenOptions={{ headerShown: false}} />
    </View>
  )
}


const styles = StyleSheet.create({
  header : {
    width : "100%",
    height : "12%",
    backgroundColor : "white",


  },

  shadow: {
    ...Platform.select({
        ios: { 
            shadowColor: '#ffffff',
           shadowOffset: { width: 10, height: 10, },
            shadowOpacity: 0.5,
           shadowRadius: 10,
        },
        android: { 
           elevation: 20,
        },
    })
}
})
