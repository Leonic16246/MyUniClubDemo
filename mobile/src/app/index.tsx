import { StyleSheet, Text, Image, View, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { Colors } from '@/constants/theme';

export default function HomeScreen() {
  const colorScheme = useColorScheme(); // light / dark
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>

      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>MyUniClubDemo</Text>
        <Image source={require('@/assets/images/CherryTreeGlyph.png')} style={styles.image}/>
      </View>

      <Text style={[styles.greeting, { color: theme.text }]}>Hello, Leon</Text>
      <Text style={[styles.heading, { color: theme.textSecondary }]}>Recent Events</Text>
      <Text style={[styles.heading, { color: theme.textSecondary }]}>Latest Posts</Text>
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