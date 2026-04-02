import { StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';


export default function HomeScreen() {

  return (
    <SafeAreaView>
        <ThemedText>Register Here</ThemedText>

        <Link href='/login'>
          <ThemedText>Login Instead</ThemedText>
        </Link>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({})