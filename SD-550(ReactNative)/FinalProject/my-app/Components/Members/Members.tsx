import React, { useContext } from 'react'
import { IMembers } from '../../types/IMembers'
import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { context } from '../../App';
type Props={
    data:IMembers
}
export default function Members(props:Props) {
    const {data} = props;
    const navigation = useNavigation()
    const {members,setmembers} = useContext(context)
    const navigate_memberDetails=()=>{
        navigation.navigate('DetailMember',data)
        
    }
    const navigate_updateMember=()=>{
        navigation.navigate('UpdateMember',data)
    }

    const confirm_delete = async () => {
        try {
          const response = await axios.delete(`http://localhost:3000/members/${data.id}`);
          if (response.status === 200) {
            const filteredAuthors:any = members.filter(item => item.id !== data.id);
            setmembers(filteredAuthors);
            Alert.alert('Member successfully deleted');
          } else {
            Alert.alert('Member not deleted');
          }
        } catch (error) {
          console.error(error);
          Alert.alert('An error occurred while deleting the Member');
        }
      };
    const delete_member = () => {
        Alert.alert('Alert', 'Are you sure to Delete?', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed')
          },
          {
            text: 'OK',
            onPress: confirm_delete
          }
        ]);
      };
  return (
   <View>
    
     <Text style={styles.text}>{data.firstname} {data.lastname}</Text>
     <View style={styles.edges}>
            <TouchableHighlight
            onPress={navigate_memberDetails}
                  
                    style={styles.button}
                    underlayColor="#5398DC">

                    <Text style={styles.buttonText} >Detail Member</Text>

                </TouchableHighlight>
                <TouchableHighlight
                  onPress={navigate_updateMember}
                    style={styles.button}
                    underlayColor="#5398DC">

                    <Text style={styles.buttonText} >Update Member</Text>

                </TouchableHighlight>
                <TouchableHighlight
                  onPress={delete_member}
                    style={styles.button}
                    underlayColor="#5398DC">

                    <Text style={styles.buttonText}  >Delete Member</Text>

                </TouchableHighlight>

            </View>
   </View>
  )
}
const styles = StyleSheet.create({

    text: {
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 80,
        padding: 10,
        borderRadius: 5,
        fontSize: 20,
        textAlign: 'center'
    },
    heading: {
        fontSize: 20,
        textAlign: 'center'

    },
    // button: {
    //     flex: 1,
    //     flexDirection: 'row'
    // },

    row: {
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    edges: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        minWidth: 50,
    },
    stars: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 5,
        minWidth: 50,
    },
    course: {
        flexDirection: 'column',
        flex: 8,
    },
    faculty: {
        color: 'grey',
    },
    button: {
        borderWidth: 1,
        borderColor: '#0066CC',
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#fff',
    },
    buttonText: {
        color: '#0066CC',
        fontSize: 12,
        textAlign: 'center',
    },
    info: {
        marginHorizontal: 40,
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
    },



})