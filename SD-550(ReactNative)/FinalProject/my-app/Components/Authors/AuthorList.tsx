import React, { useContext } from 'react'
import { Button, FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { context } from '../../App'
import Author from './Author'
import { useNavigation } from '@react-navigation/native'

export default function AuthorList() {
  const {authors,setauthors} = useContext(context)
  const navigation = useNavigation()

  const navigate_addauthor=()=>{
    navigation.navigate('AddAuthor')

  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>List Of Authors</Text>
      
      <FlatList
      data={authors}
      renderItem={({item,index})=><Author key={index} data={item}/>}/>
     
      <Pressable style={styles.button} onPress={navigate_addauthor}>
      <Text style={styles.buttonText}>Add Author</Text>
      </Pressable>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading:{
      fontSize:30,
      textAlign:'center',
      // marginTop:,
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
    marginLeft:65,
    
   
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    
  },


}) 