import { Text, View, StyleSheet, Pressable } from 'react-native';
import TimeComponent from '@/components/TimeComponent';
import { useState } from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AddWorkout from '@/components/AddWorkout';


const Contents: React.FC = () => {
  const [isOnAddWorkout, setIsOnAddWorkout] = useState(false)
  const [timeComponent, setTimeComponent] = useState([
    {
      name : "DB curls",
      set : { 
        current : 1,
        target : 3
      },
      rep : {
        current : 1,
        target : 12,
      }, 
      Temp : 'moderate'
    }
  ])



  return (
    <View style={[styles.contentsContainer]}>
 
        {isOnAddWorkout ? <AddWorkout setTimeComponent={setTimeComponent} setState={setIsOnAddWorkout}></AddWorkout> : null}


          <Pressable onPress={()=>{ setIsOnAddWorkout(true)}} style={[styles.addTimeComponent]}>
            <FontAwesome6 name="add" size={30} color="#424242" />
          </Pressable>

      {timeComponent.map((e,i) => (
        <TimeComponent key={i} data={e}></TimeComponent>
      ))}
    </View>
  );
}

   const styles = StyleSheet.create({


    contentsContainer : {
        width : "100%",
        flex : 1,
        display : "flex",
        alignItems : "center",
        backgroundColor : "#d9d9d9",
        padding : "5%"
    },

    addTimeComponent : {
      width : "90%",
      height : "10%",
      backgroundColor : "#cbcbcb",
      marginBottom : "5%",

      display : "flex",
      alignItems : "center",
      justifyContent : "center",

      padding: 20,
      borderWidth: 2, // Border thickness
      borderColor: '#bababa', // Border color
      borderRadius: 8, // Rounded corners
    }
   })


export default Contents;