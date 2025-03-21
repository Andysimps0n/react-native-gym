import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useState, useRef, useEffect } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

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
  const [restTimeState, setRestTimeState] = useState<number>(0);
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

  const onRestDropdownClick = () => {
    console.log('hi')
  }

  return (

      <View style={[styles.greyContainer]}>


        {/* close button */}
        <Pressable style={[styles.closeWrapper]} onPress={()=>{setIsOnAddWorkout(false); setSetState(0); setRepState(0) }}>
            <Fontisto style={[styles.close]} name="close-a" size={40} color="#e6e6e6" />
        </Pressable>



        <View style={[styles.containerWrapper]}>
          <View style={[styles.container]}>


            {/* writing name */}
            
            <View style={[styles.workoutNameContainer]}>
              <TextInput 
              style={[styles.workoutNameInput]}
              placeholder='wokout name'
              placeholderTextColor="#9e9e9e"
              ref={nameRef}
              returnKeyType="next"  
              onChangeText={(value)=>{
                setWorkoutNameState(value)
              }}  

              onSubmitEditing={()=>{setRef.current?.focus()}}
              ></TextInput>
            </View>




              
            <View style={[styles.timeElementWrapper]}>


              {/* Writing sets */}

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




                {/* writing reps */}

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


                  {/* writing rest time */}

              <View style={[styles.restTimeWrapper]}>
                <View style={[styles.restTimeContent]}>
                      <View style={[styles.restTimeTextWrapper]}>
                        <Text style={[styles.text1]}>Rest Time</Text>
                      </View>
                      
                      <Pressable style={{width : '100%', zIndex : 3}} onPress={()=>{onRestDropdownClick()}}>
                        <View style={[styles.restTimeDropDownButton]}>
                          <View style={[styles.restTimeNumberWrapper]}>
                            <Text>{restTimeState}</Text>
                          </View>
                          <AntDesign name="down" size={20} color="#5e5e5e" />

                          
                          <View style={[styles.restTimeDropDown]}>
                            <View style={[styles.restTimeDropdownElement]}></View>
                            <View style={[styles.restTimeDropdownElement]}></View>
                            <View style={[styles.restTimeDropdownElement]}></View>
                          </View>
                        
                        
                        </View>
                      </Pressable>

                    <Text>1</Text>
                </View> 
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
    width : '100%', 
    height : '10%', 

    position : "absolute",
    top : "46%",
    zIndex : 0,

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
      borderRadius: 3,

      backgroundColor : '#e6e6e6'
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
      // backgroundColor : 'red',

      display : "flex",
      alignItems : "center",
      justifyContent : "space-between",
      flexDirection : "row"
    },

    restTimeDropDownButton : {
      width : '50%', 
      height : '80%', 
      backgroundColor : '#e6e6e6',
      borderRadius : 4,     

      display : 'flex',
      flexDirection : "row",
      alignItems : "center",

      margin : "5%",
      position : "relative"
    },

    restTimeDropDown : {
      position : "absolute",
      height : '150%', 
      width : '100%', 
      top : "105%",
      padding : "2%",

      backgroundColor : '#e6e6e6',
      // backgroundColor : 'red',

      display : 'flex',
      overflow : "scroll",
      justifyContent : 'center',
      alignItems : 'center',

      zIndex : 5
    },

    restTimeDropdownElement : {
      width : '100%', 
      height : '60%', 
      backgroundColor : 'blue',
      marginBottom : "1%",
    },

    restTimeNumberWrapper : {
      width : '80%', 
      height : '100%',
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center'
      
      
    },
    
    restTimeWrapper : {
      width : '100%', 
      height : '25%', 
      marginTop : "5%",
    
    },

    restTimeTextWrapper : {
      margin : "3%",
    },

    restTimeContent : {
      width : "100%",
      height : "100%",
      backgroundColor : '#f5f5f5',
      padding : "1%",
      boxSizing : "borderBox",
      borderRadius : 5,
      // backgroundColor : 'red',

      display : "flex",
      alignItems : "center",
      flexDirection : "row",

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