import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Input, Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <Ionicons name="arrow-back-outline" size={24} color="#000" />
      </TouchableOpacity>

      <Card containerStyle={styles.card}>
        <Avatar
          size="xlarge"
          rounded
          icon={{ name: 'user', type: 'font-awesome' }}
          activeOpacity={0.7}
          containerStyle={styles.avatar}
        />
        <Input
          placeholder="Full Name"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
          containerStyle={styles.input}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          containerStyle={styles.input}
        />
        <Text style={styles.label}>User Type: Regular User</Text>
        <Text style={styles.label}>Connectivity Status (AI-Driven): Excellent</Text>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  backButton: {
    padding: 20,
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  card: {
    alignItems: 'center',
    padding: 20,
    margin: 20,
    elevation: 5,
  },
  avatar: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default ProfileScreen;
