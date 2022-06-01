import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; //this spesifies the Navigation Container
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //Stack comp

import UserList from './UserList';
import UserDetail from './UserDetail';

//auth tabs
import AuthTabs from '../authcomps/AuthTabs';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import UserEdit from './UserEdit';

//creates the stack for us
const Stack = createNativeStackNavigator();

export default function UserStack() {

  const [loggedIn, setLoggedIn] = useState(false);

  //Listening to if our current User is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        //user is logged in
        setLoggedIn(true)

      } else {
        //user is logged out
        setLoggedIn(false)
      }
    })

    return unsubscribe;
  }, []);

  return (
    <Stack.Navigator>
      {loggedIn ? ( //If the user is logged In (true) give them these screens
        <>
          <Stack.Screen name="Users" component={UserList} />
          <Stack.Screen name="Profile" component={UserDetail}/>
          <Stack.Screen name="Edit Profile" component={UserEdit}/>
        </>
      ) : ( //If the user is not logged In (false) give them these screens
        <Stack.Screen name="Authentication" component={AuthTabs} options={ {headerShown: false}} />
      )}
        
    </Stack.Navigator>
  );
}
