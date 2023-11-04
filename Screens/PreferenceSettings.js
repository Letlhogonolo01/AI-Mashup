import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      pushNotifications: true,
      darkMode: false,
    };
  }

  toggleSwitch = (setting) => {
    this.setState((prevState) => ({
      [setting]: !prevState[setting],
    }));
  };

  render() {
    const { darkMode } = this.state;

    return (
      <View style={[styles.container, darkMode && styles.darkContainer]}>
        <Text style={[styles.sectionHeader, darkMode && styles.darkText]}>Account Settings</Text>
        {/* Add account settings components here */}
       
        <Text style={[styles.sectionHeader, darkMode && styles.darkText]}>Notification Settings</Text>
        <View style={[styles.settingItem, darkMode && styles.darkSettingItem]}>
          <Text style={darkMode && styles.darkText}>Push Notifications</Text>
          <Switch
            value={this.state.pushNotifications}
            onValueChange={() => this.toggleSwitch('pushNotifications')}
          />
        </View>

        <Text style={[styles.sectionHeader, darkMode && styles.darkText]}>Appearance Settings</Text>
        <View style={[styles.settingItem, darkMode && styles.darkSettingItem]}>
          <Text style={darkMode && styles.darkText}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={() => this.toggleSwitch('darkMode')}
          />
        </View>
       
        {/* Add more settings sections and items as needed */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  darkContainer: {
    backgroundColor: '#222', // Dark background color
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  darkText: {
    color: '#fff', // White text color in dark mode
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  darkSettingItem: {
    backgroundColor: '#333', // Dark background color for setting items
  },
});

export default SettingsScreen;
