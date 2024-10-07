import { useContext, useState } from "react"
import { IBook } from "../../types/IBook"
import { context } from "../../App"
import { useNavigation } from "@react-navigation/native"
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { Picker } from "@react-native-picker/picker"
import axios from "axios"


export default function UpdateBook({ route }: any) {
    const data = route.params
    const [updatebook, setupdatebook] = useState<IBook>(data)
    const { books, setbooks, authors, publisher } = useContext(context)
    const navigation = useNavigation()
    const [selectedAuthorID, setSelectedAuthorID] = useState(data.authorIDs)
    const [selectedPublisherID, setSelectedPublisherID] = useState(data.publisherId);

    const submit_book = async() => {
        try{
            const response = await axios.put(`http://localhost:3000/books/${data.id}`,updatebook)
          
          
             if(response.status==200){
              const index = books.findIndex(item=>item.id==data.id)
              const arr = [...books]
              if(index!==-1){
                arr[index] = response.data
              
               
                navigation.navigate('BooksList')
                Alert.alert('Succesfully Update')
      
              }
      
             }
         
            
      
          }
        catch(error){

        }

    }

    return (
        <View>

            <TextInput placeholder='Id' style={styles.input} value={updatebook.id} editable={false} onChangeText={(text)=>setupdatebook({...updatebook,id:text})} />
            <TextInput placeholder='Title' style={styles.input} value={updatebook.title} onChangeText={(text)=>setupdatebook({...updatebook,title:text})}  />
            <TextInput placeholder='Genre' style={styles.input} value={updatebook.genre} onChangeText={(text)=>setupdatebook({...updatebook,genre:text})} />
            <TextInput placeholder='Category' style={styles.input} value={updatebook.category} onChangeText={(text)=>setupdatebook({...updatebook,category:text})} />

            <Picker
                selectedValue={updatebook.authorIDs}
                style={styles.picker}
                onValueChange={(itemValue) => setupdatebook({ ...updatebook, authorIDs: itemValue })}
            >

                {authors.map((author) => (
                    <Picker.Item key={author.id} label={author.name} value={author.id} />
                ))}
            </Picker>

            <Picker
                selectedValue={updatebook.publisherId}
                style={styles.picker}
                onValueChange={(itemValue) => setupdatebook({ ...updatebook, publisherId: itemValue })}
            >

                {publisher.map((publisher) => (
                    <Picker.Item key={publisher.id} label={publisher.name} value={publisher.id} />
                ))}
            </Picker>



            <Pressable style={styles.button} onPress={submit_book} >
                <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
        </View>


    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 30
    },
    button: {
        borderWidth: 1,
        borderColor: '#0066CC',
        borderRadius: 14,
        paddingVertical: 10,
        backgroundColor: '#0066cc',
        width: '60%',
        marginTop: 130,
        marginLeft: 65

    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
    },
    input: {
        padding: 2,
        marginHorizontal: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 3,
        fontSize: 24
    },
    label: {
        fontSize: 20,
        marginVertical: 10,
        marginLeft: 120
    },
    picker: {
        height: 40,
        marginVertical: 50,
    },



})
