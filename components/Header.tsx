import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={[styles.header]}></View>    

  );
}

   const styles = StyleSheet.create({
    header : {
        width : "100%",
        height : "10%",
        backgroundColor : "white",
      },
   })