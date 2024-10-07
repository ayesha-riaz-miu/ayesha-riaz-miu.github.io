import { useContext, useState } from "react"
import IPublisher from "../../types/IPublisher"
import { context } from "../../App"
import { useNavigation } from "@react-navigation/native"
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import axios from "axios"


export default function AddAuthor() {
    const[newpublisher,setnewpublisher] = useState<IPublisher>({name: '',phone: '',email: '',address:''})
    const {publisher,setpublisher} = useContext(context)
    const navigation = useNavigation()

    const submit_publisher=async()=>{

      try{
        const find_name = publisher.find(item=>item.name == newpublisher.name)
        if(find_name){
            Alert.alert('Publisher alredy exist')
            return;
        }
        if(!newpublisher.name||!newpublisher.phone||!newpublisher.email ||!newpublisher.address){
            Alert.alert('Please fillout empty fields')
            return;
        }
        const response = await axios.post('http://localhost:3000/publishers',newpublisher)
        if(response.status==201){
           setpublisher([newpublisher,...publisher])
           Alert.alert('Succesfully Addes')
           navigation.navigate('PublisherList')
        }

    }
    catch(error) {
        console.error(error);

    }  
      

    }

    
  return (
    <View>

    <Text style={styles.heading}>Add New Publisher</Text>
    <TextInput placeholder='Name' style={styles.input} autoCapitalize='none' onChangeText={(text)=>setnewpublisher({...newpublisher,name:text})}/>
    <TextInput placeholder='Phone' style={styles.input} onChangeText={(text)=>setnewpublisher({...newpublisher,phone:text})}/>
    <TextInput placeholder='Email'  style={styles.input}  autoCapitalize='none' onChangeText={(text)=>setnewpublisher({...newpublisher,email:text})} />
    <TextInput placeholder='Address' style={styles.input}  autoCapitalize='none' onChangeText={(text)=>setnewpublisher({...newpublisher,address:text})} />
    <Pressable style={styles.button}>
        <Text style={styles.buttonText} onPress={submit_publisher}>Submit</Text>
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

