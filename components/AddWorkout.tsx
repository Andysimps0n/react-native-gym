import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useState, useRef, useEffect } from 'react';

type AddWorkoutProps = {
    state : boolean;
    setTimeComponent : React.Dispatch<React.SetStateAction<Array<object>>>
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}



const AddWorkout: React.FC<AddWorkoutProps>  = ({ setTimeComponent, state, setState: settingState }) => {

  const setRef = useRef<TextInput | null>(null)
  const repRef = useRef<TextInput | null>(null)

  const [setState, setSetState] = useState<number>(0);
  const [repState, setRepState] = useState<number>(0);

  useEffect(()=>{
    setTimeout(()=>{
      if (setRef.current) {
        setRef.current?.focus()
      }
      
    }, 100)
  }, [])

  useEffect(()=>{
    if (repRef.current) {
      repRef.current.focus()
    }
  }, [setState])


  const addList = () => {
    settingState(false);
    const data =     {
      name : "DB curls",
      set : { 
        current : 1,
        target : setState
      },
      rep : {
        current : 1,
        target : repState,
      }, 
      Temp : 'moderate'
    }

    
  }

  return (

      <View style={[styles.greyContainer]}>


        {/* close button */}
          <Pressable style={[styles.closeWrapper]} onPress={()=>{settingState(false); setSetState(0); setRepState(0) }}>
              <Fontisto style={[styles.close]} name="close-a" size={40} color="#cfcfcf" />
          </Pressable>



        <View style={[styles.containerWrapper]}>
          <View style={[styles.container]}>
              <View style={[styles.timeElement]}>
                  <Text style={[styles.text1]}>Set</Text>
                  <TextInput
                    style={[styles.textContainer, styles.input1]}
                    ref={setRef}
                    keyboardType="numeric"
                    onChange={(value)=>{
                      const newValue = parseInt(value.nativeEvent.text, 1)
                      setSetState(newValue)
                    }}
                  />
              </View>
              <View style={[styles.timeElement]}>
                  <Text style={[styles.text1]}>Rep</Text>
                  <TextInput
                    keyboardType="numeric"
                    ref={repRef}
                    style={[styles.textContainer, styles.input1]}
                    onChange={(value)=>{
                      const newValue = parseInt(value.nativeEvent.text, 1)
                      setRepState(newValue)
                    }}
                  />
              </View>
          </View>
          {/* ok box */}
            <View style={[styles.submitContainer]}>
            <Pressable style={[styles.submitPressable]} onPress={()=>{addList()}}>
              <View style={[styles.submitButton]}><Text style={[styles.add]}>Add</Text></View>
            </Pressable>
            </View>
        </View>
      </View>

  );
}

const styles = StyleSheet.create({

  submitPressable : {
    width : "30%",
    height : '60%' 
  },

  add : {
    color : "white",
    fontSize: 15
  },


  submitButton : {
    width : '100%', 
    height : '100%', 
    backgroundColor : '#1B73F2',
    borderRadius : 6,

    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',


    
  },

  submitContainer : {
    width : '85%', 
    height : '10%', 

    position : "relative",
    top : "30%",


    display : 'flex',
    justifyContent : 'center',
    alignItems : "center",
    
  },

  closeWrapper  : {
    zIndex : 4,
    padding : 10,
  },
  input1 : {
    fontSize : 20,
    textAlign : "center",
    borderColor : "white"
  },
  
  container : {
    width : "85%",
    height : "10%",
    // backgroundColor : "#cbcbcb",
    backgroundColor : "#ffffff",
    marginBottom : "5%",
    borderWidth: 2, // Border thickness
    borderColor: '#bababa', // Border color
    borderRadius: 8, // Rounded corners
    justifyContent: 'space-between',

    display : "flex",
    alignItems : "center",
    flexDirection : "row",
    paddingLeft : "8%",
    paddingRight : "8%",


    position : "absolute",
    top : "20%",

    opacity : 1      
  }, 


  containerWrapper : {
    width : '100%', 
    height : '100%', 
    display : 'flex',
    alignItems : 'center',
    position : "relative",
    opacity : 1,
  },


    textContainer : {
      width : "60%",
      height : "60%",
      borderRadius: 8, // Rounded corners

      backgroundColor : '#cbcbcb'
      // backgroundColor : 'black'
    },


    text1 : {
      // color : "#151515",
      color : "black",
      fontSize : 20
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



    optionContainer : {
        width : "95%",
        height : "15%",
        backgroundColor : ""
    },


    greyContainer : {
        width : "112%",
        height : "100%",
        zIndex : 1,
        position : "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.75)", // Semi-transparent blue
      },

      close : {
        zIndex : 3,
        position : "absolute",
        right : 0,
        // backgroundColor : 'red',
        padding : 15,
        fontSize : 25
    }
   })


export default AddWorkout;