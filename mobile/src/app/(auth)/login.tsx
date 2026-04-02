import { StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { ThemedText } from '@/components/themed-text';
import { Link, useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>

        <TouchableOpacity onPress={() => router.canGoBack() ? router.back() : router.replace('/')}>
        <ThemedText>Back</ThemedText>
      </TouchableOpacity>

      <ThemedText style={styles.title}>Login</ThemedText>

      <ThemedText>Don't have an account?</ThemedText>
      <Link href='/register'>
        <ThemedText>Register here</ThemedText>
      </Link>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 8,
  },
  greeting: {
    fontWeight: 'bold',
    fontSize: 20
  },
  heading: {
    fontSize: 16
  }
})