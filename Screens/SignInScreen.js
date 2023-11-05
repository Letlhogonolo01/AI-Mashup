import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, Alert, SafeAreaView } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert('Input Error', 'Please fill in all the required fields.');
      return;
    }

    // Implement your sign-in logic here
    // If successful, navigate to the Home screen
    navigation.navigate('HomeScreen');
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const navigateToWelcome = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={navigateToWelcome}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </TouchableOpacity>
      <Text style={styles.signInText}>Sign In</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Sign In" onPress={handleSignIn} color="black" />

      <TouchableOpacity onPress={navigateToSignUp}>
        <Text style={styles.signUpLink}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
    borderRadius: 100,
  },
  signInText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 50,
  },
  signUpLink: {
    color: 'grey',
    marginTop: 10,
  },
});

export default SignInScreen;
