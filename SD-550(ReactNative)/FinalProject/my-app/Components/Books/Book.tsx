import React, { useContext } from 'react'
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { IBook } from '../../types/IBook'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { context } from '../../App'

type Props={
    data:IBook
}
export default function Book(props:Props) {
    const{books,setbooks} = useContext(context)
    const navigation = useNavigation()
    const {data} = props

    const navigate_details=()=>{
        navigation.navigate('DetailBook',data)

    }
    const navigate_updatebook=()=>{
        navigation.navigate('UpdateBook',data)
    }
    const confirm_delete=async()=>{
        try{
            const response = await axios.delete(`http://localhost:3000/books/${data.id}`)
            if(response.status==200){
                const filter:any = books.filter(item=>item.id!==data.id)
                console.log(filter)
                setbooks([...books,filter])
                Alert.alert('Book successfully deleted');
            } else {
              Alert.alert('Book not deleted');
            }
            
            

        }
        catch(error){

        }

    }
    const delete_book=()=>{
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

    }
  return (
    <View>
        <Text style={styles.text}>{data.title}</Text>
        <View style={styles.edges}>
            <TouchableHighlight
                  onPress={navigate_details}
                    style={styles.button}
                    underlayColor="#5398DC">

                    <Text style={styles.buttonText} >Details Book</Text>

                </TouchableHighlight>
                <TouchableHighlight
                onPress={navigate_updatebook}
                  
                    style={styles.button}
                    underlayColor="#5398DC">

                    <Text style={styles.buttonText} >Update Book</Text>

                </TouchableHighlight>
                <TouchableHighlight
                     onPress={delete_book}
                    style={styles.button}
                    underlayColor="#5398DC">

                    <Text style={styles.buttonText}  >Delete Book</Text>

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
