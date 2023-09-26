import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function LocationPage() {
  return (
    <View style={styles.container}>
      <Text>Location</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})