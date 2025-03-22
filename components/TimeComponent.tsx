import { Text, View, StyleSheet } from 'react-native';



type TimeComponentProps = {
    data: {
      name: string;
      set: { current: number; target: number };
      rep: { current: number; target: number };
      Temp: string;
    };
    isFirstElement : boolean
  };



export default function TimeComponent({ data}: TimeComponentProps) {

  return (
    <View style={[styles.container]}>

        <View style={[styles.workoutNameContainer]}>
          <Text style={[styles.workoutName]}>{data.name}</Text>
        </View>

        <View style={[styles.timeElement]}>
            <Text style={[styles.text1]}>Set</Text>
            <View style={[styles.textContainer]}><Text style={[styles.number1]}>{data.set.target}</Text></View>
        </View>
        <View style={[styles.timeElement]}>
            <Text style={[styles.text1]}>Rep</Text>
            <View style={[styles.textContainer]}><Text style={[styles.number1]}>{data.rep.target}</Text></View>
        </View>
    </View>
  );
}

   const styles = StyleSheet.create({

    workoutName : {
      fontSize : 18,
      color : "#161616"
    },

    workoutNameContainer : {
      width : '40%', 
      height : '40%', 
      position : "absolute",
      top : "-40%",
      left : 0,

    },

    number1 : {
      fontSize : 17
    },
    timeElement : {
        width : "45%",
        height : "100%",
        // backgroundColor : 'skyblue',

        display : "flex",
        alignItems : "center",
        justifyContent : "space-between",
        flexDirection : "row"
    },
    
    container : {
      width : "95%",
      height : "10%",

      backgroundColor : "rgb(255, 255, 255)",
      marginBottom : "13%",
      borderColor: '#bababa', // Border color
      borderRadius: 8, // Rounded corners
      justifyContent: 'space-between',

      display : "flex",
      alignItems : "center",
      flexDirection : "row",
      paddingLeft : "8%",
      paddingRight : "8%",

      shadowColor: '#000',  // Shadow color
      shadowOffset: { width: 0, height: 4 }, // X, Y offset
      shadowOpacity: 0.1,  // Shadow transparency
      shadowRadius: 2,  // Shadow blur
  }, 

  text1 : {
      color : "#151515",
      fontSize : 18
  }, 

  textContainer : {
      width : "60%",
      height : "60%",
      borderRadius: 8, // Rounded corners

      backgroundColor : 'rgb(235,235,235)',

      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',

      
    }
   })