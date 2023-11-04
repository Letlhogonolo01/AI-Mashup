import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToSignIn}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 310, 
    height: 310, 
    borderRadius: 150, 
  },
});

export default WelcomeScreen;
