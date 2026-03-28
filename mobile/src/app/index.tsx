import { StyleSheet, Text, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>MyUniClubDemo</Text>
        <Image source={require('@/assets/images/CherryTreeGlyph.png')} style={styles.image}/>
      </View>

      <Text style={styles.greeting}>Hello, Leon</Text>
      <Text style={styles.heading}>Recent Events</Text>
      <Text style={styles.heading}>Latest Posts</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 8,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24
  },
  greeting: {
    fontWeight: 'bold',
    fontSize: 20
  },
  heading: {
    fontSize: 16
  }
})