import { useContext, useState } from "react"
import { context } from "../../App"
import { useNavigation } from "@react-navigation/native"
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput } from "react-native"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';


export default function AddBook() {
  const{members,setmembers} = useContext(context)
  const navigation = useNavigation()
  const[newMember,setnewMember] = useState({ 
  
    firstname: '',
    lastname: '',
    address: '',
    phone: '',
    email: '',
  })
  const submit_member=async()=>{
    try{
        const findName = members.find(
            item => item.firstname.toLowerCase() === newMember.firstname.toLowerCase() && 
                    item.lastname.toLowerCase() === newMember.lastname.toLowerCase()
          );
    
          if (findName) {
            Alert.alert('Member already exists');
            return;
          }
        if(!newMember.firstname||!newMember.lastname||!newMember.address||!newMember.phone||!newMember.email ){
            Alert.alert('Please fillout empty fields')
            return;
        }
       
        const response = await axios.post('http://localhost:3000/members',newMember)
        if(response.status==201){
           
           setmembers([newMember,...members])
           Alert.alert('Succesfully Added')
           navigation.navigate('MembersList')
        }
        
    }
    catch(error){

    }
    
}

 
  

  return (

    <SafeAreaView>
      <Text style={styles.heading}>Add New Member</Text>

      <TextInput placeholder='FirstName' style={styles.input} autoCapitalize="none" onChangeText={(text)=>setnewMember({...newMember,firstname:text})}/>
      <TextInput placeholder='LastName' style={styles.input} autoCapitalize="none"  onChangeText={(text)=>setnewMember({...newMember,lastname:text})}/>
      <TextInput placeholder='Adress' style={styles.input} autoCapitalize="none"  onChangeText={(text)=>setnewMember({...newMember,address:text})}/>
      <TextInput placeholder='Phone' style={styles.input} onChangeText={(text)=>setnewMember({...newMember,phone:text})}/>
      <TextInput placeholder='E-mail' style={styles.input} autoCapitalize="none"  onChangeText={(text)=>setnewMember({...newMember,email:text})}/>
            <Pressable style={styles.button} onPress={submit_member}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
    </SafeAreaView>
    
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
