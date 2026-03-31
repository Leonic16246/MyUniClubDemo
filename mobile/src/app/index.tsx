import { StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';


export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.container}>


        <ThemedView style={styles.header}>
          <ThemedText style={styles.title}>MyUniClubDemo</ThemedText>
          <Image source={require('@/assets/images/CherryTreeGlyph.png')} style={styles.image}/>
        </ThemedView>

        <ThemedText>Hello, Leon</ThemedText>

        <ThemedText>Recent Events</ThemedText>

        <ThemedText>Latest Posts</ThemedText>



    </SafeAreaView>

  );
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