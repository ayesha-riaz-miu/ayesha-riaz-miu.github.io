import React, { useContext, useState } from 'react'
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import { context } from '../../App'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import IAuthor from '../../types/IAuthor'

export default function AddAuthor() {
    const[newauthor,setnewauthor] = useState<IAuthor>({name: '',phone: '',email: ''})
    const {authors,setauthors} = useContext(context)
    const navigation = useNavigation()

    const add_author=async()=>{
        try{
            const find_name = authors.find(item=>item.name == newauthor.name)
            if(find_name){
                Alert.alert('Author alredy exist')
                return;
            }
            if(!newauthor.name||!newauthor.phone||!newauthor.email ){
                Alert.alert('Please fillout empty fields')
                return;
            }
            const response = await axios.post('http://localhost:3000/authors',newauthor)
            if(response.status==201){
               
               setauthors([newauthor,...authors])
               Alert.alert('Succesfully Added')
               navigation.navigate('AuthorsList')
            }


        }
        catch(error) {
            console.error(error);

        }   }
  return (
    <View>

    <Text style={styles.heading}>Add New Author</Text>
    <TextInput placeholder='Name' style={styles.input}  onChangeText={(text)=>setnewauthor({...newauthor,name:text})} autoCapitalize='none'/>
    <TextInput placeholder='Phone' style={styles.input} onChangeText={(text)=>setnewauthor({...newauthor,phone:text})}/>
    <TextInput placeholder='Email' style={styles.input} onChangeText={(text)=>setnewauthor({...newauthor,email:text})}autoCapitalize='none' />
    
    <Pressable style={styles.button} onPress={add_author}>
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
