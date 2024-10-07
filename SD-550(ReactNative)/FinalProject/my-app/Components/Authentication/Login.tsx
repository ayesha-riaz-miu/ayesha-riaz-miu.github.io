import React, { useContext, useState } from 'react'
import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { context } from '../../App'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation, useNavigationBuilder } from '@react-navigation/native'


export const STORAGE_KEY = 'final-project'
export default function Login() {
    const [email, setemail] = useState('')
    const { login, setlogin } = useContext(context)
 


    const log_in = async () => {
        if (email === '') {
            Alert.alert('Please enter your email');
        } else {
            try {
                const response = await axios.get(`http://localhost:3000/users?email=${email}`);
                if (response.status === 200 && response.data.length > 0) {
                     AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ login: true }));
                    setlogin(true);
                    Alert.alert('Succesfully Login')
                    
                } else {
                    Alert.alert('Email does not exist');
                }
            } catch (error) {
                console.error('Login Error:', error);
                Alert.alert('Failed to log in');
            }
        }
    };
   
    return (
        <SafeAreaView style={styles.contanier}>
            <Text style={styles.text}>Library System</Text>
            <Image 
          source={{ uri: 'https://picsum.photos/id/201/200/300' }}
          style={{ height: 200, width: 200, marginBottom:30 }}
        />
            <TextInput placeholder='UserName' style={styles.input} onChangeText={(text) => setemail(text)} autoCapitalize={'none'} />

            <Pressable style={styles.button} onPress={log_in}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        alignItems: 'center',


    },
    text: {
        marginTop: 100,
        fontSize: 30,
        marginBottom:20

    },
    input: {
        width: 250,
        borderWidth: 1,
        marginTop: 30,
        padding: 10


    },
    button: {
        borderWidth: 1,
        borderColor: '#0066CC',
        borderRadius: 14,
        paddingVertical: 10,
        backgroundColor: '#0066cc',
        width: '40%',
        marginTop: 50,
        marginLeft: 20


    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
    },


})
