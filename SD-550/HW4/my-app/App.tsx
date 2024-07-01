
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[state,setstate] = useState({username:'',password:''})

  const onchnage = ()=>{
   console.log(state.username)
  }


 

  return (

 
      
    <View style={styles.container}>
      <TextInput placeholder='username' onChangeText={(text:string)=>setstate({...state,username:text})} style={styles.input}/>
      <TextInput  placeholder='password' onChangeText={(text:string)=>setstate({...state,password:text})} style={styles.input}/>
      <Button title='submit' onPress={onchnage}/>
     

        </View>
        
      

    

    

 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'red',

  },
timer:{
  marginBottom:180,
  marginLeft:200,
  fontSize:50

  },
  button:{
   borderColor:'black',
   borderRadius:3

  },
  input:{
    borderWidth:1,
    borderColor:"grey",
    padding:10,
    width:250

  }
});

