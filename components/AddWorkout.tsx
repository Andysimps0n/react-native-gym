import { Text, View, StyleSheet, Pressable } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';


type AddWorkoutProps = {
    state : boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}



const AddWorkout: React.FC<AddWorkoutProps>  = ({ state, setState }) => {
  return (
         <View style={[styles.greyContainer]}>
             <Pressable onPress={()=>{setState(false)}}>
                 <Fontisto style={[styles.close]} name="close-a" size={40} color="#cfcfcf" />
             </Pressable>
         </View>

  );
}

   const styles = StyleSheet.create({
    greyContainer : {
        flex : 1,
        width : "100%",
        height : "100%",
        backgroundColor : 'black',
        zIndex : 1,
        position : "absolute",
        top : 0,
        left : 0,
        opacity : 0.7
      },

      close : {
        zIndex : 3,
        position : "absolute",
        right : 30,
        top : 30
    }
   })


export default AddWorkout;