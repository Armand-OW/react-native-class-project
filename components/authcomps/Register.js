import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity,ActivityIndicator, Image } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { createUserOnRegister } from '../../services/Database';

export default function Register( {navigation} ) {

  //variables
  const [username, onUsernameChange] = useState("");
  const [email, onEmailChange] = useState("");
  const [password, onPasswordChange] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegisterPress = () => {
      //perform our firebase auth function
      setLoading(true);
      
      //create user function (auth instance, email, and password)
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          //executes when creation success
          const user = userCredentials.user;
          // Alert.alert(user.uid)
          //Add user to DB

          createUserOnRegister(user, username)

          setLoading(false);
          
          //Navigate to next screen
          navigation.replace("Users");


        })
        .catch((error) => {
          //executes when failure
          Alert.alert(error.message);
          setLoading(false);
        });

  }

  return (
    <View style={{padding: 20}}>

     <Image 
        style={{ width: 50, height: 50, marginTop: 20}}
        source={{ uri: 'https://img.icons8.com/windows/96/000000/add-user-male--v1.png'}}
     />

      <Text style={styles.heading}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Username"
        value={username}
        onChangeText={onUsernameChange}
      />

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
        onPress={handleRegisterPress}
    >
        <View><Text style={styles.loginButton}>Register</Text></View>
    </TouchableOpacity>

    <ActivityIndicator animating={loading} size="large" color="#f5347f" />
      
    </View>
  );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f5347f',
        marginTop: 20
    },
    input: {
        borderWidth: 2,
        padding: 10,
        marginTop: 20,
        borderRadius: 30,
        paddingLeft: 20,
        borderColor: '#f5347f'
    },
    loginButton: {
        marginTop: 30,
        borderRadius: 30,
        backgroundColor: '#f5347f',
        padding: 20,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});