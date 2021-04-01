import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';

import SQLite from 'react-native-sqlite-storage'

const allUsersSQL = "SELECT * FROM users"
const saveUserSQL = "INSERT INTO users (name, username, password) VALUES (?, ?, ?)"
const searchUserByUsernameSQL = "SELECT * FROM users WHERE username = ?"
const searchUserByNameContainsSQL = "SELECT * FROM users WHERE name like ?" //TODO: Tasarımı kendinize göre yapabilirsiniz
const deleteUserByUsernameSQL = "DELETE FROM users WHERE username = ?" //TODO: Tasarımı kendinize göre yapabilirsiniz
const deleteUsersSQL = "DELETE FROM users"

class MainScreen extends React.Component {
    constructor(props) {
      super(props);

      this.state = {users: [], name:"", username: "", password: "", searchByUsername: "" } ;

      this.db = SQLite.openDatabase({
          name: 'todosdb',
          createFromLocation : 1
      });

      this.bindFunctions = this.bindFunctions.bind(this)
      this.bindFunctions()

      SQLite.enablePromise(true);
    }

    bindFunctions()
    {
        this.viewAllUsers = this.viewAllUsers.bind(this)
        this.saveUser = this.saveUser.bind(this)
        this.searchByUsername = this.searchByUsername.bind(this)
        this.deleteUsers = this.deleteUsers.bind(this)
        this.onViewAllUsers = this.onViewAllUsers.bind(this)
        this.onSaveUser = this.onSaveUser.bind(this)
        this.onSearchByUsername = this.onSearchByUsername.bind(this)
        this.onDeleteUsers = this.onDeleteUsers.bind(this)


        this.onNameTextChange = this.onNameTextChange.bind(this)
        this.onUsernameTextChange = this.onUsernameTextChange.bind(this)
        this.onPasswordTextChange = this.onPasswordTextChange.bind(this)
        this.onSearchByUsernameTextChange = this.onSearchByUsernameTextChange.bind(this)
    }

    viewAllUsers(t)
    {
        t.executeSql(allUsersSQL, [], (t, results) => {
            let length = results.rows.length

            if (length == 0) {
                alert('Hiç kullanıcı eklenmedi')
                return
            }

            let usersList = []

            for (let i = 0; i < length; ++i)
                usersList.push(results.rows.item(i))

            this.setState({users: usersList})
        })
    }

    saveUser(t)
    {
        const {users, name, username, password} = this.state

        t.executeSql(saveUserSQL, [name, username, password], (t, results) => {
            console.log("rowsAffected", results.rowsAffected)

            if (results.rowsAffected > 0)
                alert("Kayıt başarıyla eklendi")
            else
                alert("Eklemede bir sorun oluştu!!!. Lütfen daha sonra tekrar deneyiniz!!!")
        })
    }

    searchByUsername(t)
    {
        const searchByUsername = this.state.searchByUsername

        t.executeSql(searchUserByUsernameSQL, [searchByUsername], (t, results) => {
            const length = results.rows.length

            if (length == 0) {
                alert('Kullanıcı adı bulunamadı')
                return
            }

            const user = results.rows.item(0)

            this.setState({users: [user]})
        })
    }

    deleteUsers(t)
    {
        t.executeSql(deleteUsersSQL, [], (t, results) => {
            console.log("rowsAffected", results.rowsAffected)

            if (results.rowsAffected > 0)
                alert("Tüm kullanıclar silindi")
            else
                alert("Silinecek kullanıcı bulunamadı")

            this.setState({users: []})
        })
    }

    onViewAllUsers()
    {
        this.db.transaction(this.viewAllUsers)
    }

    onSaveUser()
    {
        //Kontrol
        this.db.transaction(this.saveUser)
    }

    onSearchByUsername()
    {
        this.db.transaction(this.searchByUsername)
    }

    onDeleteUsers()
    {
        //TODO: Alert ile silinip silinmeyeceği sorulacak
        this.db.transaction(this.deleteUsers)
    }

    onNameTextChange(text)
    {
        this.setState({name: text})
    }

    onUsernameTextChange(text)
    {
        this.setState({username: text})
    }

    onPasswordTextChange(text)
    {
        this.setState({password: text})
    }

    onSearchByUsernameTextChange(text)
    {
        this.setState({searchByUsername: text})
    }

    render()
    {
        const {users, name, username, password, searchByUsername} = this.state

        return (
            <>
            <TextInput
                style={{width: 200, height: 35, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => this.onNameTextChange(text)}
                value={name}/>
            <TextInput
                style={{width: 200, height: 35, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => this.onUsernameTextChange(text)}
                value={username}/>
            <TextInput
                style={{width: 200, height: 35, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => this.onPasswordTextChange(text)}
                value={password}/>

            <TextInput
                style={{width: 200, height: 35, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => this.onSearchByUsernameTextChange(text)}
                value={searchByUsername}/>

            <TouchableOpacity onPress={this.onSaveUser}>
                <Text style={{textAlign: 'center', alignContent: 'center', width: 200, height: 25, color: 'white', backgroundColor: 'gray'}}>Kaydet</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onSearchByUsername}>
                <Text style={{textAlign: 'center', alignContent: 'center', width: 200, height: 25, color: 'white', backgroundColor: 'gray'}}>Kullanıcı adını bul</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onDeleteUsers}>
                <Text style={{textAlign: 'center', width: 200, height: 25,color: 'white', backgroundColor: 'gray'}}>Tüm kullanıcıları Sil</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onViewAllUsers}>
                <Text style={{textAlign: 'center', width: 200, height: 25,color: 'white', backgroundColor: 'gray'}}>Tüm kullanıcıları Listele</Text>
            </TouchableOpacity>
            {
                users.map((u, i) => {
                    return (
                        <View key={i}>
                            <Text>{u.username}</Text>
                        </View>
                    )
                })
            }
        </>
        )
    }
}


export default MainScreen
