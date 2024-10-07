import React, { useContext, useState } from 'react'
import { Alert, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native'
import { context } from '../../App'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { ICatalog } from '../../types/ICatalog'
import { ITransection } from '../../types/ITransection'



export default function BorrowBook() {
  const { books, members, catalog, setcatalog, setTransections, transections } = useContext(context)
  const [selectedBook, setselectedBook] = useState('')
  const [selectMember, setselectMember] = useState('')
  

  const navigation = useNavigation()

  const Borrow_book = async () => {

    if (!selectedBook || !selectMember) {
      Alert.alert('Please select both book and memeber')
      return;
    }
    const find_bookInCatalog = catalog.find(item => item.bookId == selectedBook)

    if (!find_bookInCatalog) {
      Alert.alert('No Copies Available');
      return;
    }
    if (find_bookInCatalog.availableCopies <= 0) {
      Alert.alert('No Copies Available');
      return;
    }

    const find_member = members.find(item => item.id == selectMember)
    console.log(find_bookInCatalog?.availableCopies)



    const updateCatalog = {
      ...find_bookInCatalog,
      availableCopies: find_bookInCatalog.availableCopies - 1
    }
    const newTransection: ITransection = {

      bookId: selectedBook,
      memberId: selectMember,
      borrowedDate: new Date().toISOString().split('T')[0],
      returnedDate: 'null'
    }
    try {
      const responseCatalog = await axios.put(`http://localhost:3000/catalogs/${find_bookInCatalog.id}`, updateCatalog)

      const responseTransection = await axios.post('http://localhost:3000/transactions', newTransection)
      console.log(responseTransection.data)
      if (responseCatalog.status == 200 && responseTransection.status == 201) {
        const update = catalog.map(item => item.id == updateCatalog.id ? updateCatalog : item)
       
        setcatalog(update)

        setTransections([...transections, responseTransection.data])

        Alert.alert('Transaction Completed')
        // navigation.navigate('TransectionsBook')


      }




      else {
        Alert.alert('Failed Transaction')

      }

    }
    catch (error) {

    }





  }
  return (
    <SafeAreaView >
      <Text style={styles.Mainheading}>Borrow Book</Text>

      <Picker
        selectedValue={selectedBook}
        onValueChange={(itemValue) => setselectedBook(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select a book" value="" />
        {books.map(book => (
          <Picker.Item
            key={book.id}
            label={`${book.title} (${catalog.find(catalog => catalog.bookId === book.id)?.availableCopies || 0} available)`}
            value={book.id}
          />
        ))}
      </Picker>

      <Picker
        selectedValue={selectMember}
        onValueChange={(itemValue) => setselectMember(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select a member" value="" />
        {members.map(member => (
          <Picker.Item key={member.id} label={`${member.firstname} ${member.lastname}`} value={member.id} />
        ))}
      </Picker>
      <Pressable style={styles.button} onPress={Borrow_book}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>


    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    marginVertical: 8,
  },
  picker: {
    height: 30,
    marginVertical: 10,
    marginBottom: 150
  },
  Mainheading: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,

  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingVertical: 10,
    backgroundColor: '#0066cc',
    width: '60%',
    marginTop: 80,
    marginLeft: 70

  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },

})
