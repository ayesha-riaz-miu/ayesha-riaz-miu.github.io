import React, { useContext, useState } from 'react';
import { Alert, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';
import { context } from '../../App';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function ReturnBook() {
  const { books, members, catalog, setcatalog, setTransections, transections } = useContext(context);
  const [selectedBook, setselectedBook] = useState('');
  const [selectMember, setselectMember] = useState('');
  const navigation = useNavigation();

  // Filter books that are currently borrowed
  const borrowedBooks = books.filter(book => 
    transections.some(transaction => transaction.bookId === book.id && transaction.returnedDate === 'null')
  );

  const Return_book = async () => {
    if (!selectedBook || !selectMember) {
      Alert.alert('Please select both book and member');
      return;
    }

    const find_bookInCatalog = catalog.find(item => item.bookId === selectedBook);
    if (!find_bookInCatalog) {
      Alert.alert('Book not found in catalog');
      return;
    }

    const find_bookAndMemberInTransection = transections.find(
      transaction => transaction.bookId === selectedBook && transaction.memberId === selectMember && transaction.returnedDate === 'null'
    );

    if (!find_bookAndMemberInTransection) {
      Alert.alert('No borrowing record found for this book and member');
      return;
    }

    const updateCatalog = {
      ...find_bookInCatalog,
      availableCopies: find_bookInCatalog.availableCopies + 1,
    };

    const updatedTransaction = {
      ...find_bookAndMemberInTransection,
      returnedDate: new Date().toISOString().split('T')[0],
    };

    try {
      const responseCatalog = await axios.put(`http://localhost:3000/catalogs/${find_bookInCatalog.id}`, updateCatalog);
      const responseTransaction = await axios.put(`http://localhost:3000/transactions/${find_bookAndMemberInTransection.id}`, updatedTransaction);

      if (responseCatalog.status === 200 && responseTransaction.status === 200) {
        const updatedCatalog = catalog.map(item => item.id === updateCatalog.id ? updateCatalog : item);
        setcatalog(updatedCatalog);
        
        const updatedTransactions = transections.map(transaction => 
          transaction.id === updatedTransaction.id ? updatedTransaction : transaction
        );
        setTransections(updatedTransactions);

        Alert.alert('Book returned successfully');
        // navigation.navigate('TransectionsBook'); // Uncomment this line to navigate
      } else {
        Alert.alert('Failed to return book');
      }
    } catch (error) {
      console.error('Error returning book:', error);
      Alert.alert('An error occurred while returning the book. Please try again.');
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.Mainheading}>Return Book</Text>

      <Picker
        selectedValue={selectedBook}
        onValueChange={(itemValue) => setselectedBook(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select a book" value="" />
        {borrowedBooks.map(book => (
          <Picker.Item
            key={book.id}
            label={`${book.title} (${catalog.find(catalogItem => catalogItem.bookId === book.id)?.availableCopies || 0} available)`}
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

      <Pressable style={styles.button} onPress={Return_book}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </SafeAreaView>
  );
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
    marginBottom: 150,
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
    marginLeft: 70,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});