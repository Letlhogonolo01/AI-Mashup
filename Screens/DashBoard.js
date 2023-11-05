import React from 'react';
import { View, Text, Image, Switch } from 'react-native';


const Header = () => (
  <View style={{ alignItems: 'center', padding: 16 }}>
    <Image
      source={require('../assets/profile.jpeg')} // Add your image path
      style={{ width: 100, height: 100, borderRadius: 50 }}
    />
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>John Doe</Text>
    <Text>User Type</Text>
    <Text>Connectivity Status (AI-Driven): Excellent</Text>
  </View>
);

const Card = ({ title, content, toggle = false, square = false }) => (
  <View
    style={{
      backgroundColor: 'white',
      borderRadius: square ? 10 : 0,
      padding: 16,
      margin: 10,
      width: square ? 150 : 'auto',
      height: square ? 150 : 'auto',
      alignItems: 'center',
    }}
  >
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
    <Text>{content}</Text>
    {toggle && <Switch value={false} />}
  </View>
);

const Dashboard = () => (
  <View style={{ flex: 1, backgroundColor: '#F5F5F5', alignItems: 'center' }}>
    <Header />
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flexDirection: 'row' }}>
        <Card
          title="Mobile Data Optimization"
          content="Toggle this switch to optimize mobile data."
          toggle={true}
          square={true}
        />
        <Card
          title="AI-Driven Content Caching"
          content="Toggle this switch to enable content caching."
          toggle={true}
          square={true}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Card
          title="Emergency Connectivity"
          content="View emergency connectivity options"
          square={true}
        />
        <Card
          title="Digital Inclusion Hub"
          content="Explore digital inclusion resources"
          square={true}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Card
          title="KPI Improvement"
          content="Access employer dashboard"
          square={true}
        />
        <Card
          title="AI-Driven Personalized Recommendations"
          content="View personalized content suggestions"
          square={true}
        />
      </View>
    </View>
  </View>
);

export default Dashboard;
