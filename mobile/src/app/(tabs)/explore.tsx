import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

export default function Explore() {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text>Buddies</Text>
        <Text>Events</Text>
        <Text>Marketplace</Text>
      </View>

      <View style={styles.content}>

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    padding: 8,
    flex: 1,
  },

  header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  paddingVertical: 8,
  },

  content: {

  }

})