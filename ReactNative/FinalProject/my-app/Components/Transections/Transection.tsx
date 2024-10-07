import React from 'react'
import { ITransection } from '../../types/ITransection'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

type Props={
    data:ITransection
}
export default function Transection(props:Props) {
    const {data}  =props
  return (
    <ScrollView style={styles.transactionBox}>
       <Text style={styles.transactionText}>Id: {data.id}</Text>
       <Text style={styles.transactionText}>BookId: {data.bookId}</Text>
       <Text style={styles.transactionText}>MemberId: {data.memberId}</Text>
       <Text style={styles.transactionText}>BorrowDate: {data.borrowedDate}</Text>
       <Text style={styles.transactionText}>ReturnDate: {data.returnedDate}</Text>
    </ScrollView>
   
  )
}

const styles = StyleSheet.create({
    transactionBox: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f9f9f9',
    },
    transactionText: {
        fontSize: 16,
        marginBottom: 4,
    },
})