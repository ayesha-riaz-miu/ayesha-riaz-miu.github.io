import React, { useContext, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { context } from '../../App'
import { SafeAreaView } from 'react-native-safe-area-context'
import Members from './Members'
import { useNavigation } from '@react-navigation/native'

export default function MemberList() {
    const { members, setmembers } = useContext(context)
    const [search, setSearch] = useState('')
    const [filtermembers, setfiltermembers] = useState(members)
    const navigation = useNavigation()

    const Search = (text: string) => {
        setSearch(text);
        const searchText = text.toLowerCase();
        const filtered = members.filter(member =>
            member.firstname.toLowerCase().includes(searchText) || member.lastname.toLowerCase().includes(searchText)
        );
        setfiltermembers(filtered);
    }
    const navigate_addmember=()=>{
        navigation.navigate('AddMembers')
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>List Of Members</Text>
            <TextInput placeholder='Search' value={search} style={styles.input} onChangeText={(text) => Search(text)} />

            <FlatList
                data={filtermembers}
                renderItem={({ item, index }) => <Members key={index} data={item} />} />

            <Pressable style={styles.button} onPress={navigate_addmember} >
                <Text style={styles.buttonText} >Add Memeber</Text>
            </Pressable>



        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    heading: {
        fontSize: 30,
        textAlign: 'center',
        // marginTop:,
        marginBottom: 30
    },
    button: {
        borderWidth: 1,
        borderColor: '#0066CC',
        borderRadius: 14,
        paddingVertical: 10,
        backgroundColor: '#0066cc',
        width: '60%',
        marginTop: 10,
        marginLeft: 30,


    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',

    },
    input: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 3,
        fontSize: 24,
        width: 250
    }


})
