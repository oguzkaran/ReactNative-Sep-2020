import React, {Component, useState} from 'react';
import {TouchableOpacity, Image, TextInput, Text} from 'react-native';

import Realm from 'realm'

const MainScreen = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const realm = new Realm({
        schema: [
            {
                name: "Todo",
                properties: {
                    title: 'string',
                    description: 'string'
                }
            }
        ]
    })

    const [todos, setTodos] = useState(realm.objects('Todo'))

    const addTodoCallback = () => {
        realm.create('Todo', {
            title: title,
            description: description
        })
        setTodos(realm.objects('Todo'))
    }

    const onAddButtonPressed = () => realm.write(addTodoCallback)

    return (
        <>
            <TextInput
                style={{width: 500, height: 40, borderColor: 'gray', borderWidth: 1}}
                value={title}
                onChangeText={text => setTitle(text)}
            />

            <TextInput
                style={{width: 500, height: 40, borderColor: 'gray', borderWidth: 1}}
                value={description}
                onChangeText={text => setDescription(text)}
            />
            <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: 40}}
                onPress={onAddButtonPressed}
            >
                <Text>Add</Text>
            </TouchableOpacity>

            {
                todos.map((todo, index) => (<Text key={index}>{todo.title}</Text>))
            }
        </>
    )
}


export default MainScreen
