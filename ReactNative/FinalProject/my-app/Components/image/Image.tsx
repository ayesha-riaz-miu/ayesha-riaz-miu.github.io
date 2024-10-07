import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function CustomImage() {
    return (
      <View>
        <Image 
          source={{ uri: 'https://picsum.photos/id/20/200/300' }}
          style={{ height: 200, width: 200, marginBottom:30 }}
        />
      </View>
    );
  }
  