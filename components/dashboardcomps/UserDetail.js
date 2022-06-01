import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Alert, Button } from 'react-native';
import { auth } from '../../firebase';

export default function UserDetail( { route, navigation } ) {

  const currentProfile = route.params;

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.heading}>{currentProfile.username}</Text>
      
      <Text style={styles.subheading}>{currentProfile.role}</Text>
      <Text style={styles.subheading}>{currentProfile.email}</Text>

{/* If our current Users Id is equal to the viewing profiles Id, show edit button */}
      {auth.currentUser.uid == currentProfile.uid ?
        <Button title="Edit" onPress={() => navigation.push("Edit Profile", currentProfile)} />
      : null }
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1
  },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    subheading: {
        fontSize: 18,
        color: '#abd5ab',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    }
   
});
