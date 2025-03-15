import { Stack} from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from '@expo/vector-icons/AntDesign';

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout() {
  return (

    <View style={[styles.mainBackGround]}>
        <Header></Header>
        <Stack screenOptions={{ headerShown: false}} />

        <Footer></Footer>
    </View>
  )
}


const styles = StyleSheet.create({

  mainBackGround : {
    flex : 1,
    backgroundColor : "#d9d9d9",
    position : "relative"
  },





  border1 : {
    padding: 20,
    borderWidth: 2,       // Border thickness
    borderColor: 'd9d9d9',  // Border color
    borderRadius: 10,     // Rounded corners (optional)
  },
})
