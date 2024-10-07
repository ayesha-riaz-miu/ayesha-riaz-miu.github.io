import { useContext, useState } from "react"
import { IMembers } from "../../types/IMembers"
import { context } from "../../App"
import { useNavigation } from "@react-navigation/native"
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import axios from "axios"


export default function UpdateAuthor({route}:any) {
  const data = route.params
  const[updateMember,setupdateMemebr] = useState<IMembers>(data)
  const{members,setmembers} = useContext(context)
  const navigation = useNavigation()

  const submit_updateMember=async()=>{
    try{
      const response = await axios.put(`http://localhost:3000/members/${data.id}`,updateMember)
    
    
       if(response.status==200){
        const index = members.findIndex(item=>item.id==data.id)
        const arr = [...members]
        if(index!==-1){
          arr[index] = response.data
         
          navigation.navigate('MembersList')
          Alert.alert('Succesfully Update')

        }

       }
   
      

    }
    catch(error){

    }

  }

  return (
    <View>
      <Text style={styles.heading}>Update Member</Text>
      <TextInput placeholder='Id' style={styles.input} value={updateMember.id} editable={false} />
      <TextInput placeholder='FirstName' style={styles.input} value={updateMember.firstname}  onChangeText={(text)=>setupdateMemebr({...updateMember,firstname:text})}/>
      <TextInput placeholder='LasttName' style={styles.input} value={updateMember.lastname}  onChangeText={(text)=>setupdateMemebr({...updateMember,lastname:text})}/>
      <TextInput placeholder='Address' style={styles.input} value={updateMember.address}  onChangeText={(text)=>setupdateMemebr({...updateMember,address:text})}/>
      <TextInput placeholder='Phone' style={styles.input} value={updateMember.phone}  onChangeText={(text)=>setupdateMemebr({...updateMember,phone:text})}/>
      <TextInput placeholder='Email' style={styles.input} value={updateMember.email}  onChangeText={(text)=>setupdateMemebr({...updateMember,email:text})}/>
      
      <Pressable style={styles.button} onPress={submit_updateMember}>
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