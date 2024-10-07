import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function DetailsAuthor({route}:any) {
    const data = route.params
   
  return (
    <View>
        <Text style={styles.heading}>{data.title}: Details</Text>
        <Text style={styles.text}>Id:  {data.id}</Text>
         <Text style={styles.text}>Phone: {data.genre}</Text>
         <Text style={styles.text}>E-mail: {data.category}</Text>
         <Text style={styles.text}>Author IDs: {Array.isArray(data.authorIDs) ? data.authorIDs.join(', ') : data.authorIDs}</Text>
         <Text style={styles.text}>PublisherId: {data.publisherId}</Text>

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
