import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize:20,
    }
})

class MainScreen extends Component {
    constructor()
    {
      super()
    }

    render()
    {
        return (
            <>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', width: 200, height: 200}}>
                        <Text>CSD</Text>
                    </View>
                    <View style={{backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', width: 200, height: 200}}>
                        <Text>CSD</Text>
                    </View>
                    <View style={{backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', width: 200, height: 200}}>
                        <Text>CSD</Text>
                    </View>
                </View>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center', width: 200, height: 200}}>
                        <Text>CSD</Text>
                    </View>
                    <View style={{backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center', width: 200, height: 200}}>
                        <Text>CSD</Text>
                    </View>
                    <View style={{backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center', width: 200, height: 200}}>
                        <Text>CSD</Text>
                    </View>
                </View>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{backgroundColor: 'steelblue', alignItems: 'center', justifyContent: 'center', width: 200, height: 200}}>
                        <Text>CSD</Text>
                    </View>
                    <View style={{backgroundColor: 'steelblue', alignItems: 'center', justifyContent: 'center', width: 200, height: 200}}>
                        <Text>CSD</Text>
                    </View>
                    <View style={{backgroundColor: 'steelblue', alignItems: 'center', justifyContent: 'center', width: 200, height: 200}}>
                        <Text>CSD</Text>
                    </View>
                </View>



            </>
        )
    }
}

export default MainScreen
