import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; // Assuming you have Expo installed

const Drawer = createDrawerNavigator();

const HomeScreenContent = ({ navigation }) => {
  const menuItems = [
    'Mobile Data Optimization (Toggle)',
    'Local Network Management',
    'AI Signal Booster (Toggle)',
    'Emergency Connectivity',
    'Digital Inclusion Hub',
    'AI-Driven Content Caching (Toggle)',
    'Employment (View Job Listings)',
    'KPI Improvement (Employer Dashboard)',
    'AI-Driven Personalized Recommendations (Content Suggestions)',
  ];

  const renderMenuItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <FlatList
      data={menuItems}
      renderItem={renderMenuItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const HomeScreen = ({ navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  const navigateToProfile = () => {
    // Handle navigation to the profile screen
    navigation.navigate('ProfileScreen');
  };

  return (
    <View>
      <Header
        leftComponent={
          <TouchableOpacity onPress={openDrawer}>
            <Ionicons name="menu-outline" size={24} color="#fff" />
          </TouchableOpacity>
        }
        centerComponent={{ text: 'User Profile', style: { color: '#fff' } }}
        rightComponent={
          <TouchableOpacity onPress={navigateToProfile}>
            <Ionicons name="person-outline" size={24} color="#fff" />
          </TouchableOpacity>
        }
        containerStyle={{
          backgroundColor: '#3498db',
          justifyContent: 'space-around',
        }}
      />
      <View>
        <Text>Welcome to the Home Screen</Text>
        {/* Add more UI components and logic here */}
      </View>
      <Drawer.Navigator initialRouteName="MainHomeScreen">
  <Drawer.Screen
    name="MainHomeScreen"
    component={() => <HomeScreenContent navigation={navigation} />}
  />
</Drawer.Navigator>
    </View>
  );
};

export default HomeScreen;
