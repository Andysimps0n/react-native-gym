import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useState, useRef, useEffect } from 'react';

type AddWorkoutProps = {
    setTimeComponent : React.Dispatch<React.SetStateAction<{ 
      name: string; 
      set: { current: number; target: number; }; 
      rep: { current: number; target: number; }; 
      Temp: string; 
    }[]>>
    setIsOnAddWorkout: React.Dispatch<React.SetStateAction<boolean>>;
}



const AddWorkout: React.FC<AddWorkoutProps>  = ({setTimeComponent, setIsOnAddWorkout} : AddWorkoutProps) => {

  const nameRef = useRef<TextInput | null>(null)
  const setRef = useRef<TextInput | null>(null)
  const repRef = useRef<TextInput | null>(null)

  const [setState, setSetState] = useState<number>(0);
  const [repState, setRepState] = useState<number>(12);
  const [workoutNameState, setWorkoutNameState] = useState<string>("");

  useEffect(()=>{
    setTimeout(()=>{
      if (nameRef.current) {
        nameRef.current?.focus()
      }
      
    }, 100)
  }, [])

  useEffect(()=>{
    if (repRef.current) {
      repRef.current.focus()
    }
  }, [setState])


  useEffect(() => {
    console.log('Count changed:', repState);
  }, [repState]); // Runs whenever `count` changes

  const onAddListClick = () => {
    setIsOnAddWorkout(false);
    const data =  {
      name : workoutNameState,
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

    setTimeComponent(prevTimeComponent => [...prevTimeComponent, data])
    
  }

  return (

      <View style={[styles.greyContainer]}>


        {/* close button */}
          <Pressable style={[styles.closeWrapper]} onPress={()=>{setIsOnAddWorkout(false); setSetState(0); setRepState(0) }}>
              <Fontisto style={[styles.close]} name="close-a" size={40} color="#cfcfcf" />
          </Pressable>



        <View style={[styles.containerWrapper]}>
          <View style={[styles.container]}>

              <View style={[styles.workoutNameContainer]}>
                <TextInput 
                style={[styles.workoutNameInput]}
                placeholder='wokout name'
                placeholderTextColor="#9e9e9e" // Change to your desired color
                ref={nameRef}
                returnKeyType="next"  // Changes the return key appearance

                onSubmitEditing={()=>{setRef.current?.focus()}}
                ></TextInput>
              </View>


              <View style={[styles.timeElementWrapper]}>
                <View style={[styles.timeElement]}>
                    <Text style={[styles.text1]}>Set</Text>
                    <TextInput
                      style={[styles.textContainer, styles.input1]}
                      ref={setRef}
                      keyboardType="numeric"
                      onChangeText={(value)=>{
                        const newValue = parseInt(value, 10)
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
                      onChangeText={(value)=>{
                        const newValue = parseInt(value, 10)
                        setRepState(newValue)
                      }}
                    />
                </View>
              </View>

          </View>
          {/* ok box */}
            <View style={[styles.submitContainer]}>
            <Pressable style={[styles.submitPressable]} onPress={()=>{onAddListClick()}}>
              <View style={[styles.submitButton]}><Text style={[styles.add]}>Add</Text></View>
            </Pressable>
            </View>
        </View>
      </View>

  );
}

const styles = StyleSheet.create({

  workoutNameInput : {
    width : '90%', 
    height : '50%', 
    borderBottomColor : "black",
    borderBottomWidth : 1,
    color : "#303030",
    fontSize : 20,
    // backgroundColor : 'blue'
  },
  workoutNameContainer : {
    width : '100%', 
    height : '30%', 
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',

    // backgroundColor : 'yellow'
  },

  timeElementWrapper : {
    width : '100%',
    height : '30%',  
    // backgroundColor : 'red',
    display : 'flex',
    justifyContent : "space-between",
    flexDirection : "row",
    padding: 5,
  },

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
    top : "32%",


    display : 'flex',
    justifyContent : 'center',
    alignItems : "center",
    
  },

  closeWrapper  : {
    zIndex : 4,
    padding : 10,
  },
  input1 : {
    fontSize : 17,
    textAlign : "center",
    borderColor : "white"
  },
  
  container : {
    width : "85%",
    height : "30%",
    // backgroundColor : "#cbcbcb",
    backgroundColor : "#ffffff",
    marginBottom : "5%",
    borderWidth: 2, // Border thickness
    borderColor: '#bababa', // Border color
    borderRadius: 8, // Rounded corners
    
    display : "flex",

    flexDirection : "column",
    paddingLeft : "8%",
    paddingRight : "8%",


    position : "absolute",
    top : "13%",

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
      height : "90%",
      borderRadius: 4, // Rounded corners

      backgroundColor : '#d9d9d9'
      // backgroundColor : 'black'
    },


    text1 : {
      color : "#303030",
      // color : "black",
      fontSize : 17
    }, 


    timeElement : {
      width : "45%",
      height : "100%",
      backgroundColor : '#f5f5f5',
      padding : "4%",
      boxSizing : "borderBox",
      borderRadius : 5,

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