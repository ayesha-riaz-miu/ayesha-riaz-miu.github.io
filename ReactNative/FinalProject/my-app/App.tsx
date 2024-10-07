import { Alert, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Home/Home';
import AuthorList from './Components/Authors/AuthorList';
import { createContext, useContext, useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import AddAuthor from './Components/Authors/AddAuthor';
import UpdateAuthor from './Components/Authors/UpdateAuthor';
import PublisherList from './Components/Publishers/PublisherList';
import IAuthor from './types/IAuthor';
import IPublisher from './types/IPublisher';
import IContext from './types/IContext';
import AddPublisher from './Components/Publishers/AddPublisher';
import UpdatePublisher from './Components/Publishers/UpdatePublisher';
import { IBook } from './types/IBook';
import BooksList from './Components/Books/BooksList';
import AddBook from './Components/Books/AddBook';
import DetailsAuthor from './Components/Authors/DetailsAuthor';
import DetailsPublisher from './Components/Publishers/DetailsPublisher';
import DetailBook from './Components/Books/DetailBook';
import UpdateBook from './Components/Books/UpdateBook';
import { IMembers } from './types/IMembers';
import MemberList from './Components/Members/MemberList';
import AddMembers from './Components/Members/AddMembers';
import DetailsMembers from './Components/Members/DetailsMembers';
import UpdateMember from './Components/Members/UpdateMember';
import Login, { STORAGE_KEY } from './Components/Authentication/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BorrowBook from './Components/Books/BorrowBook';
import { ICatalog } from './types/ICatalog';
import ReturnBook from './Components/Books/ReturnBook';
import { ITransection } from './types/ITransection';
import TransectionList from './Components/Transections/TransectionList';




const Stack = createNativeStackNavigator();
export const context = createContext<IContext>({
  authors: [],
  setauthors: () => { },
  publisher: [],
  setpublisher: () => { },
  books: [],
  setbooks: () => { },
  members:[],
  setmembers:()=>{},
  login:false,
  setlogin:()=>{},
  catalog:[],
  setcatalog:()=>{},
  transections:[],
  setTransections:()=>{}
  
})

export default function App() {
  const [authors, setauthors] = useState<IAuthor[]>([])
  const [publisher, setpublisher] = useState<IPublisher[]>([])
  const [books, setbooks] = useState<IBook[]>([])
  const [members,setmembers] = useState<IMembers[]>([])
  const [login,setlogin]=useState(false)
  const [catalog,setcatalog] = useState<ICatalog[]>([])
  const [transections,setTransections] = useState<ITransection[]>([])

  useEffect(() => {
    try {
      const get_author = async () => {
        const response = await axios.get('http://localhost:3000/authors')
        if (response.status == 200) {
          setauthors(response.data)
        }
        else {
          Alert.alert('Authors Not Found')
        }
      }
      get_author()
    }
    catch (error) {

    }

  }, [])

  useEffect(() => {
    try{
      const get_publisher = async () => {
        const response = await axios.get('http://localhost:3000/publishers')
        if (response.status == 200) {
          setpublisher(response.data)
        }
        else {
          Alert.alert('Publishers Not Found')
        }
  
  
      }
      get_publisher()

    }
    catch(error){

    }
  

  }, [])

  useEffect(()=>{
    try{
      const get_members=async()=>{
        const response = await axios.get('http://localhost:3000/members')
        if(response.status==200){
          setmembers(response.data)
        }
        else {
          Alert.alert('Members Not Found')
        }
      }
      get_members()

    }
    catch(error){

    }
  

  },[])


  useEffect(() => {
    try{
      const get_books = async () => {
        const response = await axios.get('http://localhost:3000/books')
        if(response.status==200){
          setbooks(response.data)
        }
        else{
          Alert.alert('Books Not Found')
        }
  
  
      }
      get_books()

    }
    catch(error){

    }
   
  }, [])

  useEffect(() => {
    const load_login = async () => {
      try {
        const data = await AsyncStorage.getItem(STORAGE_KEY);
        if (data) {
          const obj = JSON.parse(data);
          setlogin(obj.login)
          // setlogin(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    load_login();
  }, []);

  useEffect(()=>{
    try{
      const get_catalog=async()=>{
        const response = await axios.get('http://localhost:3000/catalogs')
        if(response.status==200){
          setcatalog(response.data)
        }
        else{
          Alert.alert('Catalog Not Found')
  
        }
      }
      get_catalog()

    }
    catch(error){

    }
   

  },[])

  useEffect(()=>{
    try{
      const get_transections = async()=>{
        const response = await axios.get('http://localhost:3000/transactions')
        if(response.status==200){
          setTransections(response.data)
        } 

      }
      get_transections()

    }
    catch(error){

    }
  },[])

     
      
  if (!login) {
    return <Login/>;
  }
 


  return (

    <context.Provider value={{ authors, setauthors, publisher, setpublisher, books, setbooks,members,setmembers,login,setlogin,catalog,setcatalog,transections,setTransections }}>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AuthorsList" component={AuthorList} />
          <Stack.Screen name="AddAuthor" component={AddAuthor} />
          <Stack.Screen name="UpdateAuthor" component={UpdateAuthor} />
          <Stack.Screen name="DetailAuthor" component={DetailsAuthor} />
          <Stack.Screen name="PublisherList" component={PublisherList} />
          <Stack.Screen name="AddPublisher" component={AddPublisher} />
          <Stack.Screen name="UpdatePublisher" component={UpdatePublisher} />
          <Stack.Screen name="DetailPublisher" component={DetailsPublisher} />
          <Stack.Screen name="BooksList" component={BooksList} />
          <Stack.Screen name="AddBook" component={AddBook} />
          <Stack.Screen name="DetailBook" component={DetailBook} />
          <Stack.Screen name="UpdateBook" component={UpdateBook} />
          <Stack.Screen name="MembersList" component={MemberList} />
          <Stack.Screen name="AddMembers" component={AddMembers} />
          <Stack.Screen name="DetailMember" component={DetailsMembers} />
          <Stack.Screen name="UpdateMember" component={UpdateMember} />
          <Stack.Screen name="BorrowBook" component={BorrowBook} />
          <Stack.Screen name="ReturnBook" component={ReturnBook} />
          <Stack.Screen name="TransectionsBook" component={TransectionList} />

        </Stack.Navigator>
      </NavigationContainer>

    </context.Provider>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});