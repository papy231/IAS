import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Welcome');

  // Écran Welcome
  if (currentScreen === 'Welcome') {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons name="person-outline" size={60} color="#8B5CF6" />
        </View>
        
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>ConnectApp</Text>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => setCurrentScreen('Login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Écran Login
  if (currentScreen === 'Login') {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => setCurrentScreen('Welcome')}
        >
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>

        <View style={styles.iconContainer}>
          <Ionicons name="person-outline" size={50} color="#8B5CF6" />
        </View>
        
        <Text style={styles.title}>Login</Text>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => setCurrentScreen('Home')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Écran Home
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>Bienvenue dans ConnectApp! 🎉</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setCurrentScreen('Welcome')}
      >
        <Text style={styles.buttonText}>Retour</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  iconContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 60,
  },
  button: {
    backgroundColor: '#1F2937',
    paddingHorizontal: 70,
    paddingVertical: 16,
    borderRadius: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});