import { useContext, useState } from "react"
import IPublisher from "../../types/IPublisher"
import { context } from "../../App"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native"


export default function UpdatePublisher({route}:any) {
  const data = route.params
  const[updatePublisher,setupdatePublisher] = useState<IPublisher>(data)
  const{publisher,setpublisher} = useContext(context)
  const navigation = useNavigation()

  const submit_updateAuthor=async()=>{
    try{
      const response = await axios.put(`http://localhost:3000/publishers/${data.id}`,updatePublisher)
      console.log(response.data)
    
       if(response.status==200){
        const index = publisher.findIndex(item=>item.id==data.id)
        const arr = [...publisher]
        if(index!==-1){
          arr[index] = response.data
          navigation.navigate('PublisherList')
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
      <TextInput placeholder='Id' style={styles.input} value={updatePublisher.id} editable={false} onChangeText={(text)=>setupdatePublisher({...updatePublisher,id:text})} />
      <TextInput placeholder='Name' style={styles.input} value={updatePublisher.name} onChangeText={(text)=>setupdatePublisher({...updatePublisher,name:text})}   />
      <TextInput placeholder='Phone' style={styles.input} value={updatePublisher.phone} onChangeText={(text)=>setupdatePublisher({...updatePublisher,phone:text})}  />
      <TextInput placeholder='Email' style={styles.input} value={updatePublisher.email}  onChangeText={(text)=>setupdatePublisher({...updatePublisher,email:text})}  />
      <TextInput placeholder='Adress' style={styles.input} value={updatePublisher.address} onChangeText={(text)=>setupdatePublisher({...updatePublisher,address:text})}   />
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
