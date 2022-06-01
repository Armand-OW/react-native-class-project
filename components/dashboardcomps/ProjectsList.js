import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { listenToAllProjects } from '../../services/Database'
import { useFocusEffect } from '@react-navigation/native' //to perform use effects when we see and not see screens


export const ProjectsList = ({navigation}) => {

    const [projects, setProjects] = useState([])

    useFocusEffect(
        React.useCallback(() => {
          // Do something when the screen is focused
          listenToData()
          return () => {
            // Do something when the screen is unfocused
            // Useful for cleanup functions
          };
        }, [])
      );

    const listenToData = async () => {
        const data = await listenToAllProjects()
        setProjects(data)
    }

  return (
    <SafeAreaView>
      <Button title="Add" color="#FFE5B4" onPress={() => navigation.navigate("Create Project")}/>

      <ScrollView style={styles.container}>
          {projects.map((item, index) => (
            <TouchableOpacity key={index}>
                <View style={styles.item}>
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
          ))}
          
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },  
    item: {
        padding: 20,
        fontSize: 30,
        backgroundColor: '#FFE5B4'
    }
})
