import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import loginIcon from '../../assets/login_icon.png';
import { auth } from '../../firebase';

export default function Login( {navigation} ) {

  //variables
  const [email, onEmailChange] = useState("");
  const [password, onPasswordChange] = useState("");

  const handleLoginPress = () => {
      //perform our firebase auth function
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        Alert.alert(user.uid);
        //Navigate to next screen
        navigation.replace("Users");

      }).catch((error) => {
        Alert.alert(error.message);
      })
  }

  return (
    <SafeAreaView style={{padding: 20}}>

    <TouchableOpacity
        onPress={() => Alert.alert("Image Clicked")}
    >
    <Image 
        style={{ width: 50, height: 50, marginTop: 20}}
        source={loginIcon}
     />
     </TouchableOpacity>

      <Text style={styles.heading}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={onEmailChange}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Password"
        value={password}
        onChangeText={onPasswordChange}
        secureTextEntry={true} //Set it as password
      />

    <TouchableOpacity
        onPress={handleLoginPress}
    >
        <View><Text  style={styles.loginButton}>Login</Text></View>
    </TouchableOpacity>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#52307c',
        marginTop: 20
    },
    input: {
        borderWidth: 2,
        padding: 10,
        marginTop: 20,
        borderRadius: 30,
        paddingLeft: 20,
        borderColor: '#52307c'
    },
    loginButton: {
        marginTop: 30,
        borderRadius: 30,
        backgroundColor: '#52307c',
        padding: 20,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
