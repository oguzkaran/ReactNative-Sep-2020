import React, {useState} from 'react';
import { StyleSheet, Switch, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

const AddScreen = ({navigation}) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [completed, setCompleted] = useState(true)

  const saveButtonClicked = () => {

  }

  const toggleSwitch = () => setCompleted(!completed)

  return (
    <View style={styles.container}>
      <TextInput style={{width: 200, height: 30, borderColor: 'gray', borderWidth: 1, textAlign: 'center'}}
                 value={title}
                 placeholder="Title"
                 textValueChange={text => setTitle(text)}/>
      <TextInput style={{width: 200, height: 30, borderColor: 'gray', borderWidth: 1, textAlign: 'center'}}
                value={description}
                placeholder="Description"
                textValueChange={text => setDescription(text)}/>

      <Text>Completed?</Text>

      <Switch value={completed}
              trackColor={{ false: "#F7E1C2", true: "#003399" }}
              thumbColor={"#F7E1C2"}
              ios_backgroundColor="#003399"
              onValueChange={toggleSwitch}/>

      <TouchableOpacity style={{width: 200, height: 30, backgroundColor: '#003399', justifyContent: 'center'}}
                       onPress={saveButtonClicked}>
       <Text style={{textAlign: 'center', color: 'white'}}>Save</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddScreen
