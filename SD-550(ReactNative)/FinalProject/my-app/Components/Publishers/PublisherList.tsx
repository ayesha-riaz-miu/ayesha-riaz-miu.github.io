import React, { useContext } from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native'
import { context } from '../../App'
import Publisher from './Publisher'
import { useNavigation } from '@react-navigation/native'

export default function PublisherList() {
  const {publisher,setpublisher}  = useContext(context)
  const navigation = useNavigation()
  const navigate_addpublisher=()=>{
    navigation.navigate('AddPublisher')


  }
  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>List Of Publishers</Text>
      <FlatList
      data={publisher}
      renderItem={({item,index})=><Publisher key={index} data={item}/>}/>
      <Pressable style={styles.button} onPress={navigate_addpublisher}>
        <Text style={styles.buttonText}>Add Publisher</Text>
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
