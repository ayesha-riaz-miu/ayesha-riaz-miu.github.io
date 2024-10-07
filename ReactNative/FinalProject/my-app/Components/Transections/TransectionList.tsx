import React, { useContext } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { context } from '../../App'
import Transection from './Transection'

export default function TransectionList() {
  const {transections,setTransections} = useContext(context)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Details of All Transections</Text>
      
      <FlatList
      data={transections}
      renderItem={({item,index})=><Transection key={index} data={item}/>}/>
     
    </SafeAreaView>
   
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 30
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
