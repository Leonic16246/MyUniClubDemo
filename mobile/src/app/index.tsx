import { StyleSheet, Text, Image, View, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

export default function HomeScreen() {
  const colorScheme = useColorScheme(); // 'light' | 'dark'
  const theme = colorScheme === 'dark' ? darkColors : lightColors;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>

      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>MyUniClubDemo</Text>
        <Image source={require('@/assets/images/CherryTreeGlyph.png')} style={styles.image}/>
      </View>

      <Text style={[styles.greeting, { color: theme.text }]}>Hello, Leon</Text>
      <Text style={[styles.heading, { color: theme.subtext }]}>Recent Events</Text>
      <Text style={[styles.heading, { color: theme.subtext }]}>Latest Posts</Text>
    </SafeAreaView>
  );
}

const lightColors = {
  background: '#ffffff',
  text: '#000000',
  subtext: '#444444',
};

const darkColors = {
  background: '#121212',
  text: '#f0f0f0',
  subtext: '#aaaaaa',
};

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