
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Alert, TouchableOpacity,Button, ActivityIndicator } from 'react-native';

import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { getAllUsers } from '../../services/Database';

export default function UserList( { navigation } ) {

  const [name, setName] = useState(auth.currentUser.email);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers()
  }, [])

  const fetchAllUsers = async () => {
    const data = await getAllUsers()
    console.log(data)
    setUsers(data)
    setIsLoading(false)
  }


  // const users = [
  //   {name: 'Armand', role: 'Lecturer'},
  //   {name: 'Isla', role: 'Student'},
  //   {name: 'Hansin', role: 'Student'},
  //   {name: 'Jeandre', role: 'Student'},
  //   {name: 'Pieter', role: 'Student'},
  //   {name: 'Gordon', role: 'Student'},
  //   {name: 'Dylan', role: 'Student'}
  // ]

  const onSignOutPress = () => {

    signOut(auth).then(() => {
      //Success
    })
    .catch((error) => {
      Alert.alert(error.message);
    })
  }

  return (
    <SafeAreaView >

      <Text>Welcome, {name}!</Text>
      <Text style={styles.heading}>All the Users</Text>

      <Button title="Sign Out" onPress={onSignOutPress}  />

      <ActivityIndicator animating={isLoading} />

      <ScrollView style={{marginBottom: 130}}>

        {users.map((user, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate("Profile", user)}>
            <View style={styles.card}>
              <Text style={{fontSize: 21}}>{user.username}</Text>
              <Text>{user.role}</Text>
            </View>
          </TouchableOpacity>
          
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 20,
        marginBottom: 20,
    },
    card: {
      padding: 20,
      backgroundColor: '#abd5ab',
      borderRadius: 20,
      marginBottom: 20
    }
   
});
