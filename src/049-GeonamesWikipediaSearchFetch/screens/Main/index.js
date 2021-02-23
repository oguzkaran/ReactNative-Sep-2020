import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

class MainScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            isFetching: true,
            query: ""
        };

        this.onSearchButtonPressed = this.onSearchButtonPressed.bind(this)
    }

    onSearchButtonPressed()
    {
        const {isFetching, data, query} = this.state

        fetch(`http://api.geonames.org/wikipediaSearchJSON?q=${query}&maxRows=30&username=csystem`)
            .then(response => response.json())
            .then(json => {if (json.geonames.length == 0) alert("Not found any data"); this.setState({data: json.geonames})})
            .catch(err => alert(err))
            .finally(() => this.setState({isFetching: false}))
    }

    render()
    {
        const {data, isFetching, query} = this.state

        return (
            <>
                <Text style={{fontSize: 20}}>GEONAMES WIKIPEDIA SEARCH SERVICE</Text>

                <TextInput
                    style={{borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({query: text})}
                    value={query}
                />
                <TouchableOpacity
                    style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: 40}}
                    onPress={this.onSearchButtonPressed}
                >
                    <Text>Search</Text>
                </TouchableOpacity>
                {
                    isFetching ? <ActivityIndicator/> : (
                        <FlatList
                            data={data}
                            keyExtractor={({geonameId}, index) => `${index}`}
                            renderItem={({item}) => (
                                <Text>{item.title}==>{item.lat}:{item.lng}</Text>
                            )}
                        />
                    )
                }
            </>
        )
    }
}

const styles = StyleSheet.create({
    posShow: {
        textAlign: 'center',
        marginTop: 40,
        position: 'absolute',
    },
    button: {
        textAlign: 'center',
        position: 'absolute',
        width: 200,
        height: 50
    },
    square: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MainScreen
