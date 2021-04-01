import React, {Component, useState, useEffect} from 'react';
import {Text, View} from 'react-native';

import SQLite from 'react-native-sqlite-storage'

class MainScreen extends React.Component {
    constructor(props) {
      super(props);

      this.state = {users: []};

      this.db = SQLite.openDatabase({
          name: 'todosdb',
          createFromLocation : 1
      },
      this.success.bind(this),
      this.fail);

      SQLite.enablePromise(true);
    }

    success = () => {
        this.db.transaction(
            t => {
                t.executeSql('SELECT * FROM users', [], (t, allUsers) => {
                    console.log("Query")

                    let length = allUsers.rows.length
                    console.log("Length:", length)
                    console.log("Users", allUsers.rows.item(0))

                    let usersList = []

                    for (let i = 0; i < length; ++i)
                        usersList.push(allUsers.rows.item(i))

                    console.log("users", usersList)

                    this.setState({users: usersList})
                })
            }
        )
    }

    fail = error => {
        console.log("error", error)
        alert(error)
    }

    render()
    {
        const {users} = this.state
        return (
            <>
            <Text>All Users</Text>
        {
                users.map((u, i) => {
                    return (
                        <View key={i}>
                            <Text>{u.username} {u.name}</Text>
                        </View>
                    )
                })
        }
        </>
        )
    }
}


export default MainScreen
