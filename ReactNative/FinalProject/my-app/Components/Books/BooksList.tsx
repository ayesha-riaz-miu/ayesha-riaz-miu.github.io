import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { context } from '../../App'
import Book from './Book'
import { useNavigation } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker'

export default function BooksList() {
  const { books, setbooks } = useContext(context)
  const navigation = useNavigation()
  const [search, setSearch] = useState('')
  const [filterbook, setfilterbook] = useState(books)
  const [category, setCategory] = useState("");
  const [genre, setGenre] = useState("");

  const navigate_addbook = () => {
    navigation.navigate('AddBook')
  }

  const navigate_BorrowBook = () => {
    navigation.navigate('BorrowBook')

  }

  const navigate_ReturnBook = () => {
    navigation.navigate('ReturnBook')
  }


  useEffect(() => {
    filterBooks();
  }, [search, category, genre, books]);
  const filterBooks = () => {
    let filtered = books;

    if (category) {
      filtered = filtered.filter(book => book.category === category);
    }

    if (genre) {
      filtered = filtered.filter(book => book.genre === genre);
    }

    if (search) {
      filtered = filtered.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));
    }


    setfilterbook(filtered);
  };
  const categories = [...new Set(books.map((book) => book.category))];
  const genres = [...new Set(books.map((book) => book.genre))];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="All Categories" value="" />
          {categories.map(cat => (
            <Picker.Item key={cat} label={cat} value={cat} />
          ))}
        </Picker>

        <Picker
          selectedValue={genre}
          onValueChange={(itemValue) => setGenre(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="All Genres" value="" />
          {genres.map(gen => (
            <Picker.Item key={gen} label={gen} value={gen} />
          ))}
        </Picker>
      </View>

      <Text style={styles.heading}>List Of Books</Text>
      <TextInput
        placeholder="Search"
        value={search}
        style={styles.input}
        onChangeText={(text) => setSearch(text)}
      />

      <FlatList
        data={filterbook}
        renderItem={({ item, index }) => <Book key={index} data={item} />}
       
       
      />

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={navigate_addbook}>
          <Text style={styles.buttonText}>Add Book</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={navigate_BorrowBook}>
          <Text style={styles.buttonText}>Borrow Book</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={navigate_ReturnBook}>
          <Text style={styles.buttonText}>Return Book</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingVertical: 10,
    backgroundColor: '#0066cc',
    width: '30%',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 24,
    width: '70%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  picker: {
    borderColor: '#ccc',
    borderWidth: 5,
    width: '45%',
  }
});


