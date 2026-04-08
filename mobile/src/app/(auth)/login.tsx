import { StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link, useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity onPress={() => router.canGoBack() ? router.back() : router.replace('/')}>
        <ThemedText>Back</ThemedText>
      </TouchableOpacity>

      <ThemedView style={styles.content}>

        <ThemedText style={styles.title}>Login</ThemedText>

        <ThemedText>Don't have an account?</ThemedText>

        <Link href='/register'>
          <ThemedText>Register here</ThemedText>
        </Link>

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
    gap: 8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 8,
  },
  heading: {
    fontSize: 16
  }
})