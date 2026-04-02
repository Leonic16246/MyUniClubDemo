import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { router } from 'expo-router';


export default function HomeScreen() {

  return (
    <SafeAreaView>
      <ThemedText>Register Here</ThemedText>

      <TouchableOpacity onPress={() => router.canGoBack() ? router.back() : router.replace('/(auth)/login')}>
        <ThemedText>Back to Login</ThemedText>
      </TouchableOpacity>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({})