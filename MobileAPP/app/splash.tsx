import { View, Text, StyleSheet, Image } from 'react-native';
import { useEffect } from 'react';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';

export default function SplashScreen() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    // Navigate to main app after 2 seconds
    const timer = setTimeout(() => {
      router.replace('/');
      router.push('/login');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
      <View style={styles.content}>
        <Image
          source={require('@/assets/images/splash-newscreen.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={[styles.title, { color: Colors[colorScheme ?? 'light'].text }]}>
          Welcome to Our App
        </Text>
        <Text style={[styles.subtitle, { color: Colors[colorScheme ?? 'light'].text }]}>
          Loading your experience...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
}); 