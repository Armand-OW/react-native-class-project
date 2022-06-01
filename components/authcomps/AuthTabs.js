import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, Button, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //create a tab

import Login from './Login';
import Register from './Register';

//icons
import loginIcon from '../../assets/login_icon.png';

//creates the tab for us
const Tab = createBottomTabNavigator();

export default function AuthTabs() {

  return (
    <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
            if(route.name === "Login") {
                return <Image source={loginIcon} style={{width: 20, height: 20}} />
            } else {
                return <Image style={{width: 20, height: 20}}  source={{ uri: 'https://img.icons8.com/windows/96/000000/add-user-male--v1.png'}} />
            }
        },
        tabBarActiveTintColor: 'tomato'
    })}>
       <Tab.Screen name="Login" component={Login} options={{ title: 'Welcome Back', headerTintColor: '#fff', headerStyle: { backgroundColor: '#52307c'} }}/>
       <Tab.Screen 
        name="Register" 
        component={Register} 
        options={
           { 
               title: '', 
               headerTintColor: '#fff', 
               headerStyle: { backgroundColor: '#f5347f'},
               headerRight: () => (
                   <Button 
                        title='info' 
                        color="#fff" 
                        onPress={() => Alert.alert("This is our Awesome Class Project App!")} />
               ),
               headerLeft: () => (
                   <Text style={{color: '#fff', padding: 5}}>Please join us!</Text>
               )
            }
        }/>
    </Tab.Navigator>
  );
}
