import { StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link, useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/theme';

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const scheme = useColorScheme()
  const colors = Colors[scheme === 'dark' ? 'dark' : 'light']

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter your email and password')
      return
    }
    setLoading(true)
    try {
      await login(email, password)
      router.replace('/')
    } catch (e: any) {
      Alert.alert('Login Failed', e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container} >
      <TouchableOpacity onPress={() => router.canGoBack() ? router.back() : router.replace('/')}>
        <ThemedText>Back</ThemedText>
      </TouchableOpacity>

      <ThemedView style={styles.content}>
        <ThemedText style={styles.title}>Login</ThemedText>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}
        >
          <ThemedText style={styles.buttonText}>
            {loading ? 'Logging in...' : 'Login'}
          </ThemedText>
        </TouchableOpacity>

        <ThemedText>Don't have an account?</ThemedText>
        <Link href='/register'>
          <ThemedText>Register here</ThemedText>
        </Link>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 8, flex: 1 },
  content: { flex: 1, paddingTop: '40%', alignItems: 'center', gap: 12 },
  title: { fontWeight: 'bold', fontSize: 24, marginBottom: 8 },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#FFF',
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
})