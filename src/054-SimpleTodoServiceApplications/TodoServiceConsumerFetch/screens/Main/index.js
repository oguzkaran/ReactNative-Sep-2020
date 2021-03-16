import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

class MainScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            isFetching: true,
            username: "",
            title: "",
            description:"",
            start: "",
            expected: "",
            todoId: '',
            month: (new Date().getMonth() + 1) + "",
            count: ""
        };

        this.onSaveButtonPressed = this.onSaveButtonPressed.bind(this)
        this.onListButtonPressed = this.onListButtonPressed.bind(this)
        this.onListByMonthButtonPressed = this.onListByMonthButtonPressed.bind(this)
        this.onNumberOfTodosButtonPressed = this.onNumberOfTodosButtonPressed.bind(this)
    }

    onSaveButtonPressed()
    {
        const {data, isFetching, username, title, description, start, expected, todoId, month, count} = this.state

        fetch(`http://192.168.1.167:50500/api/todos/save`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(
                    {"username": username,
                    "start": start,
                    "expected": expected,
                    "title": title,
                    "description": description})
            })
            .then(response => response.json())
            .then(todo => this.setState({todoId: todo.todoId}))
            .catch(err => alert(err))
            .finally(() => this.setState({isFetching: false}))
    }

    onListButtonPressed()
    {
        const {data, isFetching, username, title, description, start, expected, todoId, month, count} = this.state

        fetch(`http://192.168.1.167:50500/api/todos/all`)
            .then(response => response.json())
            .then(todos => {if (todos.length == 0) alert("Not found any data"); this.setState({data: todos})})
            .catch(err => alert(err))
            .finally(() => this.setState({isFetching: false}))
    }

    onListByMonthButtonPressed()
    {
        const {data, isFetching, username, title, description, start, expected, todoId, month, count} = this.state

        fetch(`http://192.168.1.167:50500/api/todos/starts?mon=${month}`)
            .then(response => response.json())
            .then(todos => {if (todos.length == 0) alert("Not found any data"); this.setState({data: todos})})
            .catch(err => alert(err))
            .finally(() => this.setState({isFetching: false}))
    }

    onNumberOfTodosButtonPressed()
    {
        const {data, isFetching, username, title, description, start, expected, todoId, month, count} = this.state

        fetch(`http://192.168.1.167:50500/api/todos/count`)
            .then(response => response.json())
            .then(count => this.setState({count: count}))
            .catch(err => alert(err))
            .finally(() => this.setState({isFetching: false}))
    }

    render()
    {
        const {data, isFetching, username, title, description, start, expected, todoId, month, count} = this.state

        return (
            <>
                <Text style={{fontSize: 20}}>TODO APPLICATION</Text>

                <TextInput
                    style={{borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({username: text})}
                    value={username}
                    placeholder="Input username"
                />
                <TextInput
                    style={{borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({title: text})}
                    value={title}
                    placeholder="Input title"
                />
                <TextInput
                    style={{borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({description: text})}
                    value={description}
                    placeholder="Input description"
                />
                <TextInput
                    style={{borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({start: text})}
                    value={start}
                    placeholder="Input start date (dd/MM/yyyy)"
                />
                <TextInput
                    style={{borderColor: 'gray', borderWidth: 1}}
                    onChangeText={text => this.setState({expected: text})}
                    value={expected}
                    placeholder="Input expected date (dd/MM/yyyy)"
                />

                <TextInput
                    style={{borderColor: 'blue', borderWidth: 1}}
                    onChangeText={text => this.setState({month: text})}
                    value={month}
                    placeholder="Input month for list"
                />
                <Text>
                    {todoId}
                </Text>
                <Text>
                    Count:{count}
                </Text>

                <TouchableOpacity
                    style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: 40}}
                    onPress={this.onSaveButtonPressed}
                >
                    <Text>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', height: 40}}
                    onPress={this.onNumberOfTodosButtonPressed}
                >
                    <Text>Number of Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: 40}}
                    onPress={this.onListButtonPressed}
                >
                    <Text>List</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', height: 40}}
                    onPress={this.onListByMonthButtonPressed}
                >
                    <Text>List By Month</Text>
                </TouchableOpacity>
                {
                    isFetching ? <ActivityIndicator/> : (
                        <FlatList
                            data={data}
                            keyExtractor={({geonameId}, index) => `${index}`}
                            renderItem={({item}) => (
                                <Text>{item.title}==>[{item.todoId}:{item.username}]{item.description}:</Text>
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
