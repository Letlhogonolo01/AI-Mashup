import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Header, Card } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const HomeScreenContent = () => {
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
      
  };

  const navigateToProfile = () => {
    navigation.navigate('ProfileScreen');
  };

  const data = [
    {
      title: 'Mobile Data Optimization (Toggle)',
      content: [
        'Data Saved: [Amount]',
        'Data Usage Analysis (Chart)',
        'Tips for Efficient Data Usage',
      ],
    },
    {
      title: 'List of Connected Networks',
      content: [
        'Network Health: Excellent (AI-Driven)',
        'Devices Connected (Manage Devices)',
        'Optimize Network Settings',
      ],
    },
    {
      title: 'Emergency Service Numbers',
      content: [
        'Quick Access to Local Emergency Services',
        'SOS Feature for Emergency Alert',
      ],
    },
    {
      title: 'List of Online Courses and Resources',
      content: ['AI-Personalized Recommendations', 'View Course (Link)'],
    },
    {
      title: 'AI Signal Booster (Toggle)',
      content: ['Signal Strength Improvement Metrics (AI-Driven)'],
    },
    {
      title: 'List of Frequently Accessed Websites',
      content: ['AI-Driven Content Preloading'],
    },
    {
      title: 'User Settings and Preferences',
      content: ['Data Privacy Settings', 'Account Management'],
    },
  ];

  const renderItem = ({ item }) => (
    <Card title={item.title}>
      {item.content.map((text, index) => (
        <Text key={index}>{text}</Text>
      ))}
    </Card>
  );

  return (
    <View>
      <Header
        leftComponent={
          <TouchableOpacity onPress={openDrawer}>
            <Ionicons name="menu-outline" size={24} color="#fff" />
          </TouchableOpacity>
        }
        centerComponent={{ text: 'Dashboard', style: { color: '#fff' } }}
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
      <Drawer.Navigator initialRouteName="MainHomeScreen">
        <Drawer.Screen
          name="MainHomeScreen"
          component={HomeScreenContent}
        />
      </Drawer.Navigator>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default HomeScreen;
