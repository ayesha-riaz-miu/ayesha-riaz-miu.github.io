import React, { useContext } from 'react'
import { Alert, Button, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import axios, { Axios } from 'axios';
import { context } from '../../App';
import IAuthor from '../../types/IAuthor';

type Props = {
    data: IAuthor;

}

export default function Author(props: Props) {
    const { data } = props
    const navigation = useNavigation()
    const{authors,setauthors} = useContext(context)

    const navigate_updateAuthor=()=>{
        navigation.navigate('UpdateAuthor',data)

    }
    const confirm_delete = async () => {
        try {
          const response = await axios.delete(`http://localhost:3000/authors/${data.id}`);
          if (response.status === 200) {
            const filteredAuthors:any = authors.filter(item => item.id !== data.id);
            setauthors(filteredAuthors);
            Alert.alert('Author successfully deleted');
          } else {
            Alert.alert('Author not deleted');
          }
        } catch (error) {
          console.error(error);
          Alert.alert('An error occurred while deleting the author');
        }
      };
    const delete_author = () => {
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
      const navigate_detailsAuthor=()=>{
        navigation.navigate('DetailAuthor',data)
      }
    return (
        <View >
  

            <Text style={styles.text}>{data.name}</Text>

            <View style={styles.edges}>
            <TouchableHighlight
                   onPress={navigate_detailsAuthor}
                    style={styles.button}
                    underlayColor="#5398DC">

                    <Text style={styles.buttonText} >Detail Author</Text>

                </TouchableHighlight>
                <TouchableHighlight
                   onPress={navigate_updateAuthor}
                    style={styles.button}
                    underlayColor="#5398DC">

                    <Text style={styles.buttonText} >Update Author</Text>

                </TouchableHighlight>
                <TouchableHighlight

                    style={styles.button}
                    underlayColor="#5398DC">

                    <Text style={styles.buttonText} onPress={delete_author} >Delete Author</Text>

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
