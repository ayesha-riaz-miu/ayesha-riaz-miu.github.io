import React, { useContext, useState } from 'react'
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

import { context } from '../../App'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

export default function AddBook() {
  const { books, setbooks, authors, publisher, catalog, setcatalog } = useContext(context)
  const navigation = useNavigation()
  const [numberOfCopies, setNumberOfCopies] = useState('');
  const [newbook, setnewbook] = useState({

    title: '',
    genre: '',
    category: '',
    authorIDs: [],
    publisherId: ''
  })

  const submit_book = async () => {
    try {

      const find_title = books.find(item => item.title == newbook.title)
      if (find_title) {
        Alert.alert('Book alredy exist')
        return;
      }
      if (!newbook.title || !newbook.genre || !newbook.category) {
        Alert.alert('Please fillout empty fields')
        return;
      }
      const response = await axios.post('http://localhost:3000/books', newbook)
      if (response.status == 201) {
        const addedbook = response.data
        setbooks([newbook, ...books])

        const newCatalogEntry = {
          bookId: addedbook.id,
          numberOfCopies: parseInt(numberOfCopies),
          availableCopies: parseInt(numberOfCopies)
        };
        const responseCatalog = await axios.post('http://localhost:3000/catalogs', newCatalogEntry);
        if (responseCatalog.status === 201) {
          setcatalog([responseCatalog.data, ...catalog]);
          Alert.alert('Successfully added book and updated catalog');
          navigation.navigate('BooksList')
        } else {
          Alert.alert('Failed to update catalog');
        }

      }


    }
    catch (error) {

    }

  }


  return (

    <SafeAreaView>


      <TextInput placeholder='Title' style={styles.input} onChangeText={(text) => setnewbook({ ...newbook, title: text })} />
      <TextInput placeholder='Genre' style={styles.input} onChangeText={(text) => setnewbook({ ...newbook, genre: text })} />
      <TextInput placeholder='Category' style={styles.input} onChangeText={(text) => setnewbook({ ...newbook, category: text })} />
      <TextInput  placeholder='Number of Copies' style={styles.input} keyboardType='numeric'onChangeText={(text) => setNumberOfCopies(text)} />

      <Picker
        selectedValue={newbook.authorIDs}
        style={styles.picker}
        onValueChange={(itemValue) => setnewbook({ ...newbook, authorIDs: itemValue })}
      >
        <Picker.Item label="Select Author" value="" />
        {authors.map((author) => (
          <Picker.Item key={author.id} label={author.name} value={author.id} />
        ))}
      </Picker>

      <Picker
        selectedValue={newbook.publisherId}
        style={styles.picker}
        onValueChange={(itemValue) => setnewbook({ ...newbook, publisherId: itemValue })}
      >
        <Picker.Item label="Select Publisher" value="" />
        {publisher.map((publisher) => (
          <Picker.Item key={publisher.id} label={publisher.name} value={publisher.id} />
        ))}
      </Picker>
      <Pressable style={styles.button} onPress={submit_book}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingVertical: 10,
    backgroundColor: '#0066cc',
    width: '60%',
  
    marginLeft: 65

  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  input: {


    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 24
  },
  picker: {

    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 5,
  },


})