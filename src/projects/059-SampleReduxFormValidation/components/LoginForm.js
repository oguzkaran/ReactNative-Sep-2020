import React, {Component} from 'react';

import {
  Container,
  Content,
  Header,
  Body,
  Text,
  Button,
  Title,
  Item,
  Input,
} from 'native-base';

import {Field, reduxForm} from 'redux-form';

const validate = info => {
  const error = {username: '', password: ''};
  const username = info.username;
  const password = info.password;

  if (username === undefined || username.length <= 5)
    error.username = 'invalid username';

  if (password === undefined || password.length < 6)
    error.password = 'invalid password';

  return error;
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: false,
    };

    this.renderInputProc = this.renderInputProc.bind(this);
    this.onLoginButtonPressed = this.onLoginButtonPressed.bind(this);
  }

  renderInputProc({input, label, type, meta: {touched, error, warning}}) {
    const errorFlag = error !== undefined;
    this.setState({isValid: !errorFlag});

    return (
      <Item error={errorFlag}>
        <Input {...input} />
        {errorFlag ? <Text>{error}</Text> : <Text />}
      </Item>
    );
  }

  onLoginButtonPressed() {
    const {isValid} = this.state;
    alert(isValid ? 'Login' : 'Can not login');
  }

  render() {
    const {handleSubmit, reset} = this.props;

    return (
      <Container>
        <Header>
          <Body>
            <Title>Login Form</Title>
          </Body>
        </Header>
        <Content>
          <Field name="username" component={this.renderInputProc} />
          <Field name="password" component={this.renderInputProc} />
          <Button block primary onPress={this.onLoginButtonPressed}>
            <Text>Login</Text>
          </Button>

          <Button block primary onPress={reset}>
            <Text>Reset</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm);
