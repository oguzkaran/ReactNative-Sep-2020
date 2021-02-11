import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Text, StyleSheet} from 'react-native';

const url = 'http://api.geonames.org/wikipediaSearchJSON?q=ankara&maxRows=30&username=csystem' //GET

class MainScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            isFetching: true
        };
    }

    componentDidMount()
    {
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({data: json.geonames}))
            .catch(err => alert(err))
            .finally(() => this.setState({isFetching: false}))
    }

    render()
    {
        const {data, isFetching} = this.state

        return (
            <>
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
