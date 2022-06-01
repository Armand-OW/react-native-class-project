import { StyleSheet, Text, View, TextInput, Button,KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import { newProject } from '../../services/Database'
import { auth } from '../../firebase'

export const CreateProject = ({navigation}) => {

    const [name, setName] = useState("")
    const [term, setTerm] = useState("")
    const [technology, setTechnology] = useState("")

    const saveProject = async () => {

        const data ={
            name: name,
            term: term,
            technology: technology,
            userId: auth.currentUser.uid
        }

        console.log(data);
        await newProject(data);

        navigation.goBack()
    }

  return (
    <KeyboardAvoidingView>

      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Name of Project"
      />
      <TextInput
        style={styles.input}
        onChangeText={setTerm}
        value={term}
        placeholder="Term"
      />
      <TextInput
        style={styles.input}
        onChangeText={setTechnology}
        value={technology}
        placeholder="Technology Used"
      />

      <Button title="Save" onPress={saveProject} />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        padding: 10,
        marginTop: 20,
        borderRadius: 30,
        paddingLeft: 20,
        borderColor: '#FFE5B4'
    }
})