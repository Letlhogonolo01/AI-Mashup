import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <Ionicons name="arrow-back-outline" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.screenTitle}>ProfileScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set your background color
    paddingTop: 10
  },
  backButton: {
    padding: 20,
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  screenTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50, // Adjust the margin as needed
  },
});

export default ProfileScreen;
