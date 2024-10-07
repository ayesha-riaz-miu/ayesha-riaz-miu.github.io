import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function DetailsAuthor({route}:any) {
    const data = route.params
   
  return (
    <View>
        <Text style={styles.heading}>{data.name} Details</Text>
        <Text style={styles.text}>Id:  {data.id}</Text>
         <Text style={styles.text}>Phone: {data.phone}</Text>
         <Text style={styles.text}>E-mail: {data.email}</Text>

    </View>
   
  )
}


const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        textAlign:'center',
        marginTop:50,
        marginBottom:100
       
        
    },
    text:{
        marginLeft:70,
        padding:5,
        fontSize:20
        
    }
}
)