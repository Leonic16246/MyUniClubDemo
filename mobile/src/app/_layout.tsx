import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar />
        <Stack screenOptions={{ headerShown: false, animation: 'fade' }}>
          <Stack.Screen name='(tabs)' options={{ animation: 'slide_from_left' }}/>
          <Stack.Screen name='(auth)' options={{ animation: 'slide_from_right' }}/>
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}