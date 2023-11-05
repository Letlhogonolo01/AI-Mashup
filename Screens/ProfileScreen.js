import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={goBack}>
        <Ionicons name="arrow-back-outline" size={94} color="#000" />
      </TouchableOpacity>
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
