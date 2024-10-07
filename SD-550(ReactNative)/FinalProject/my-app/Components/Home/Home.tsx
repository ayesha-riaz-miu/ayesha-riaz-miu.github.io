import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Image from '../image/Image';
import CustomImage from '../image/Image';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY } from '../Authentication/Login';
import { context } from '../../App';


export default function Home() {
  const navigation = useNavigation();
  const {setlogin} = useContext(context)
 

  const navigateAuthor = () => {
    navigation.navigate('AuthorsList');
  };
  const navigatePublisher=()=>{
    navigation.navigate('PublisherList')
  }
  const navigateBook=()=>{
    navigation.navigate('BooksList')
  }
  const navigateMembers=()=>{
    navigation.navigate('MembersList')
  }
  const navigateTransections=()=>{
    navigation.navigate('TransectionsBook')
  }

  const logout_app=async()=>{

    try{
      await AsyncStorage.removeItem(STORAGE_KEY)
      setlogin(false)
      Alert.alert('Successfully LogOut')

    }
    catch(error){

    }

  }

  return (
 
    <SafeAreaView style={styles.container}>
       <CustomImage/>

      <Pressable style={styles.button} onPress={navigateAuthor}>
        <Text style={styles.buttonText}>Authors</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText} onPress={navigatePublisher}>Publishers</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText} onPress={navigateBook}>Books</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText} onPress={navigateMembers}>Members</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText} onPress={navigateTransections}>Transections</Text>
      </Pressable>

      <Pressable style={styles.buttonlogout}>
        <Text style={styles.buttonTextLogout} onPress={logout_app}>LogOut</Text>
      </Pressable>

      

      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginTop:5,
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#0066cc',
    marginVertical: 10,
    width: '80%',
    marginTop:5
   
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonlogout: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'grey',
    marginVertical: 10,
    width: '80%',
    marginTop:10
   
  },
  buttonTextLogout: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  }
});