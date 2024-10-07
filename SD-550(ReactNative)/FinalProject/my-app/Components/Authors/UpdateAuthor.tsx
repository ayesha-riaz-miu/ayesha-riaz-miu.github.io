import React, { useContext, useState } from 'react'
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import axios from 'axios'
import { context } from '../../App'
import { useNavigation } from '@react-navigation/native'
import IAuthor from '../../types/IAuthor'

export default function UpdateAuthor({route}:any) {
  const data = route.params
  const[updateAuthor,setupdateAuthor] = useState<IAuthor>(data)
  const{authors,setauthors} = useContext(context)
  const navigation = useNavigation()

  const submit_updateAuthor=async()=>{
    try{
      const response = await axios.put(`http://localhost:3000/authors/${data.id}`,updateAuthor)
   
    
       if(response.status==200){
        setauthors([...authors,updateAuthor])
        const index = authors.findIndex(item=>item.id==data.id)
       
        if(index!==-1){
          const arr = [...authors]
          arr[index] = response.data
          // setauthors([...authors,arr])
         
          navigation.navigate('AuthorsList')
          Alert.alert('Succesfully Update')

        }

       }
   
      

    }
    catch(error){

    }

  }

  return (
    <View>
      <Text style={styles.heading}>Update Author</Text>
      <TextInput placeholder='Id' style={styles.input} value={updateAuthor.id} editable={false} />
      <TextInput placeholder='Name' style={styles.input} value={updateAuthor.name}  onChangeText={(text)=>setupdateAuthor({...updateAuthor,name:text})}/>
      <TextInput placeholder='Phone' style={styles.input} value={updateAuthor.phone}  onChangeText={(text)=>setupdateAuthor({...updateAuthor,phone:text})}/>
      <TextInput placeholder='Email' style={styles.input} value={updateAuthor.email}  onChangeText={(text)=>setupdateAuthor({...updateAuthor,email:text})}/>
      <Pressable style={styles.button} onPress={submit_updateAuthor}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>

   
  )
}

const styles = StyleSheet.create({
  heading:{
      fontSize:30,
      textAlign:'center',
      marginTop:50,
      marginBottom:30
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingVertical: 10,
    backgroundColor: '#0066cc',
    width: '60%',
    marginTop:10,
    marginLeft:65
   
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  input: {
      padding: 10,
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 3,
      fontSize: 24
    },
    


})