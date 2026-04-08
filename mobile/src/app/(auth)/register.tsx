import { StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { router } from 'expo-router';


export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.container}>

      <ThemedView style={styles.content}>

        <ThemedText style={styles.title}>Sign Up</ThemedText>

        <TouchableOpacity onPress={() => router.canGoBack() ? router.back() : router.replace('/(auth)/login')}>
          <ThemedText>Back to Login</ThemedText>
        </TouchableOpacity>

      </ThemedView>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: '50%',
    alignItems: 'center',
    gap: 16
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
  },
  heading: {
    fontSize: 16
  }
})