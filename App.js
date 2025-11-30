import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('Welcome');

  const renderWelcome = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>IS</Text>
        </View>
        <Text style={styles.title}>InspoSearch</Text>
        <Text style={styles.subtitle}>
          Search, collect and organize inspiration across your documents.
        </Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => setScreen('Login')}
        >
          <Text style={styles.primaryButtonText}>Get started</Text>
        </TouchableOpacity>
        <Text style={styles.smallText}>Log in to see your saved files.</Text>
      </View>
    </SafeAreaView>
  );

  const renderLogin = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <TouchableOpacity style={styles.backLink} onPress={() => setScreen('Welcome')}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { marginTop: 24 }]}>Log in</Text>
        <Text style={styles.subtitle}>Sign in to continue with InspoSearch.</Text>
        <View style={styles.inputMock}>
          <Text style={styles.inputLabel}>Email</Text>
          <Text style={styles.inputPlaceholder}>name@example.com</Text>
        </View>
        <View style={styles.inputMock}>
          <Text style={styles.inputLabel}>Password</Text>
          <Text style={styles.inputPlaceholder}>••••••••</Text>
        </View>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => setScreen('Home')}
        >
          <Text style={styles.primaryButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.smallText}>Forgot your password? Reset coming soon.</Text>
      </View>
    </SafeAreaView>
  );

  const renderHome = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.homeWrapper}>
        <View style={styles.homeHeader}>
          <View>
            <Text style={styles.welcomeLabel}>Hi Pascal,</Text>
            <Text style={styles.homeTitle}>Your workspace</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>P</Text>
          </View>
        </View>

        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <Text style={styles.searchText}>Search in your files</Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Quick actions</Text>
        </View>

        <View style={styles.quickRow}>
          <View style={styles.quickCard}>
            <Text style={styles.quickEmoji}>📂</Text>
            <Text style={styles.quickLabel}>Browse folders</Text>
          </View>
          <View style={styles.quickCard}>
            <Text style={styles.quickEmoji}>📄</Text>
            <Text style={styles.quickLabel}>Open a PDF</Text>
          </View>
        </View>

        <View style={styles.quickRow}>
          <View style={styles.quickCard}>
            <Text style={styles.quickEmoji}>🗣️</Text>
            <Text style={styles.quickLabel}>Start recording</Text>
          </View>
          <View style={styles.quickCard}>
            <Text style={styles.quickEmoji}>⭐</Text>
            <Text style={styles.quickLabel}>View favorites</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recently opened</Text>
        </View>

        <View style={styles.fileRow}>
          <Text style={styles.fileIcon}>📄</Text>
          <View style={styles.fileInfo}>
            <Text style={styles.fileName}>Lecture_Notes_NT2.pdf</Text>
            <Text style={styles.fileMeta}>PDF · opened yesterday</Text>
          </View>
        </View>

        <View style={styles.fileRow}>
          <Text style={styles.fileIcon}>📄</Text>
          <View style={styles.fileInfo}>
            <Text style={styles.fileName}>IAS_App_Userflow.docx</Text>
            <Text style={styles.fileMeta}>Word · edited 2 hours ago</Text>
          </View>
        </View>

        <View style={styles.fileRow}>
          <Text style={styles.fileIcon}>🖼️</Text>
          <View style={styles.fileInfo}>
            <Text style={styles.fileName}>Wireframes_HighLevel.png</Text>
            <Text style={styles.fileMeta}>Image · added 3 days ago</Text>
          </View>
        </View>

        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => setScreen('Home')}>
            <Text style={styles.navEmoji}>🏠</Text>
            <Text style={styles.navLabelActive}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => setScreen('Home')}>
            <Text style={styles.navEmoji}>📂</Text>
            <Text style={styles.navLabel}>Files</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => setScreen('Home')}>
            <Text style={styles.navEmoji}>🗣️</Text>
            <Text style={styles.navLabel}>Record</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => setScreen('Home')}>
            <Text style={styles.navEmoji}>⚙️</Text>
            <Text style={styles.navLabel}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );

  if (screen === 'Welcome') return renderWelcome();
  if (screen === 'Login') return renderLogin();
  return renderHome();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '700',
    color: '#4F46E5',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 28,
    lineHeight: 22,
  },
  primaryButton: {
    backgroundColor: '#111827',
    paddingHorizontal: 64,
    paddingVertical: 14,
    borderRadius: 999,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  smallText: {
    marginTop: 20,
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
  },
  backLink: {
    alignSelf: 'flex-start',
  },
  backText: {
    fontSize: 14,
    color: '#4B5563',
  },
  inputMock: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  inputLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 4,
  },
  inputPlaceholder: {
    fontSize: 15,
    color: '#111827',
  },
  homeWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 16,
  },
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  welcomeLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 2,
  },
  homeTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 24,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchText: {
    fontSize: 14,
    color: '#4B5563',
  },
  sectionHeader: {
    marginBottom: 8,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  quickRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  quickCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  quickEmoji: {
    fontSize: 24,
    marginBottom: 6,
  },
  quickLabel: {
    fontSize: 13,
    color: '#111827',
    textAlign: 'center',
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  fileIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  fileInfo: {
    flex: 1,
  },
  fileName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  fileMeta: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 10,
    marginTop: 16,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navEmoji: {
    fontSize: 18,
  },
  navLabel: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 2,
  },
  navLabelActive: {
    fontSize: 11,
    color: '#111827',
    fontWeight: '600',
    marginTop: 2,
  },
});
