import { Text, View, StyleSheet, Pressable } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { Link } from 'expo-router';


export default function Footer() {
  return (
    <View style={[styles.footer]}>
        
        
        <Link href="/" asChild>
            <Pressable>
                <Entypo name="home" size={50} color="#595959" />
            </Pressable>
        </Link>
        
        <Link href="/Contents" asChild>
            <Pressable>
                <FontAwesome6 name="dumbbell" size={50} color="#595959" />
            </Pressable>
        </Link>
        
        <Ionicons name="settings-sharp" size={50} color="#595959" />
    </View>  
  );
}

   const styles = StyleSheet.create({
    footer : {
        width : "100%",
        height : "10%",
        backgroundColor : "white",
        position : "absolute",
        bottom : 0,

        display : "flex", 
        alignItems : "center",
        justifyContent : "space-evenly",
        flexDirection : "row"
      },

   })