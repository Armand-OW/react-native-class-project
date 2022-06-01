import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Alert, Button, TextInput} from 'react-native';
import { updateProfile } from '../../services/Database';

export default function UserEdit( { route, navigation } ) {

  const currentProfile = route.params;

  const [username, setUsername] = useState(currentProfile.username);
  const [role, setRole] = useState(currentProfile.role);

  const saveProfile = async () => {

    await updateProfile(currentProfile.uid, {username: username, role: role})
    navigation.navigate(
        {
        name: 'Profile',
        params: {...currentProfile},
        merge: true,
      });
  }

  return (
    <SafeAreaView style={styles.container}>

        <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
        />

        <TextInput
            style={styles.input}
            onChangeText={setRole}
            value={role}
        />

        <Button title='Save' onPress={saveProfile}/>
    
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
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
   
});
