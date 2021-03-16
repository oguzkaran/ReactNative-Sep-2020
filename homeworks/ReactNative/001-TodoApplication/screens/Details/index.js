import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

const DetailsScreen = ({navigation}) => {
  const updateButtonClicked = () => {

  }

  const deleteButtonClicked = () => {

  }
  
  return (
    <View style={styles.container}>
      <Text>Details here</Text>

      <TouchableOpacity style={{width: 200, height: 30, backgroundColor: '#003399', justifyContent: 'center'}}
                       onPress={updateButtonClicked}>
       <Text style={{textAlign: 'center', color: 'white'}}>Update</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{width: 200, height: 30, backgroundColor: '#003399', justifyContent: 'center'}}
                       onPress={deleteButtonClicked}>
       <Text style={{textAlign: 'center', color: 'white'}}>Delete</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{width: 200, height: 30, backgroundColor: '#003399', justifyContent: 'center'}}
                       onPress={() => navigation.goBack()}>
       <Text style={{textAlign: 'center', color: 'white'}}>Go back</Text>
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

export default DetailsScreen
