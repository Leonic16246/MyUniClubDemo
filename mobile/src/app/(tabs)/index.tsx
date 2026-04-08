import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container} safe={true}>

      <ThemedView style={styles.header} pointerEvents="box-none">
        <ThemedText style={styles.title}>MyUniClubDemo</ThemedText>
        <TouchableOpacity onPress={() => router.push('/login')} style={styles.logoButton}>
          <Image source={require('@/assets/images/CherryTreeGlyph.png')} style={styles.image}/>
        </TouchableOpacity>
      </ThemedView>

      <ThemedText>Hello, Leon</ThemedText>
      <ThemedText>Recent Events</ThemedText>
      <ThemedText>Latest Posts</ThemedText>

    </ThemedView>
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
    alignItems: 'center',
    width: '100%',
    paddingVertical: 8,
  },
  logoButton: {
    padding: 4,
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