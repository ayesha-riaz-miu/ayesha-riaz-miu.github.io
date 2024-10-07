import React, { useContext } from 'react'
import IPublisher from '../../types/IPublisher'
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { context } from '../../App'

type Props={
    data:IPublisher
}

export default function Publisher(props:Props) {
    const {publisher,setpublisher} = useContext(context)
    const navigation = useNavigation()
    const {data} = props

    const navigate_updatePublisher=()=>{
        navigation.navigate('UpdatePublisher',data)

    }

    const Confirm_delete=async()=>{
        try{
            const response = await axios.delete(`http://localhost:3000/publishers/${data.id}`)
            if (response.status === 200) {
                const filteredAuthors:any = publisher.filter(item => item.id !== data.id);
                setpublisher(filteredAuthors);
                Alert.alert('Publisher successfully deleted');
              } else {
                Alert.alert('Publisher not deleted');
              }


        }
        catch(error){

        }

    }
    const delete_publisher=()=>{
        Alert.alert('Alert','Are You Sure to Delete',[
            {
                text:'Cancel',
                onPress:()=>console.log('Cancel presses')
            },
            {
                text:'OK',
                onPress: Confirm_delete
            }
        ])
    }
    const navigate_DetailPublisher=()=>{
        navigation.navigate('DetailPublisher',data)
    }
  return (
    <View >
  

            <Text style={styles.text}>{data.name}</Text>
            <View style={styles.edges}>
            <TouchableHighlight
                 
                  onPress={navigate_DetailPublisher}
                    style={styles.button}
                    underlayColor="#5398DC">

                    <Text style={styles.buttonText} >Detail Publisher</Text>

                </TouchableHighlight>
                
                <TouchableHighlight
                  onPress={navigate_updatePublisher}
                    style={styles.button}
                    underlayColor="#5398DC">

                    <Text style={styles.buttonText} >Update Publisher</Text>

                </TouchableHighlight>
                <TouchableHighlight
                 onPress={delete_publisher}

                    style={styles.button}
                    underlayColor="#5398DC">

                    <Text style={styles.buttonText}  >Delete Publisher</Text>

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