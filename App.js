import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, SafeAreaView, Button } from 'react-native';

import UserStack from './components/dashboardcomps/UserStack';

import { NavigationContainer } from '@react-navigation/native';
import ProjectStack from './components/dashboardcomps/ProjectStack';

export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      {/* <UserStack /> */}
      <ProjectStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50
  },
});
