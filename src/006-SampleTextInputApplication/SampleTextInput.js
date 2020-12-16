import React, {Component} from 'react';
import { TextInput, View, Button } from 'react-native';

import {UserInfoRepository} from './LoginRepository.js'

class SampleTextInput extends Component {
  constructor(props)
  {
    super(props)
    this._userInfoRepository = new UserInfoRepository()
  }

  state = {
    email: '',
    password: ''
  }

  handleLogin(email, password)
  {
      if (this._userInfoRepository.exists(email, password))
          alert(`Giriş Başarılı:email=${email}, password=${password}`)
      else
          alert(`Giriş Başarısız:email=${email}, password=${password}`)
  }

  handleRegister(email, password)
  {
    if (this._userInfoRepository.save(email, password))
      alert(`Kayıt:email=${email}, password=${password}`)
    else
      alert(`${email} ile kayıt olamazsınız`)
  }

  handleEmail = text => this.setState({email: text})
  handlePassword = text => this.setState({password: text})
  login = (email, password) => this.handleLogin(email, password)
  register = (email, password) => this.handleRegister(email, password)

  render()
  {
    return (
        <View>
          <TextInput
            style={{height : 40, width: 300, borderColor: 'blue', borderWidth : 1}}
            placeholder='Email giriniz'
            onChangeText={this.handleEmail}/>

           <TextInput
             style={{height : 40, width: 300, borderColor: 'red', borderWidth : 1}}
             placeholder='Şifre giriniz'
             onChangeText={this.handlePassword}/>

          <Button title='Giriş Yap' onPress={() => this.login(this.state.email, this.state.password)}/>
          <Button title='Kayıt Ol' onPress={() => this.register(this.state.email, this.state.password)}/>
        </View>
    )
  }
}

export {SampleTextInput}
