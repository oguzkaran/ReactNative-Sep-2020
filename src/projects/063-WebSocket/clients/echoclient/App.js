import React, {useState} from 'react';

import {
  Container,
  Content,
  Body,
  Header,
  Title,
  Left,
  Button,
  Text,
  Icon,
  Footer,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';

const echoSocket = new WebSocket('wss://echo.websocket.org');

const App = () => {
  const [text, onChangeText] = useState('');
  const [resultText, setResultText] = useState('');
  echoSocket.onopen = () => {
    console.log('onopen', 'connected');
  };

  echoSocket.onmessage = e => {
    console.log('Received:', e.data);
    setResultText(e.data.toString());
  };

  echoSocket.onclose = err => {
    console.log('Error:', err.message);
  };
  echoSocket.onclose = e => {
    console.log('Code:', e.code);
    console.log('Reason:', e.reason);
  };

  const onOKButtonPressed = () => {
    echoSocket.send(text);
  };

  return (
    <Container>
      <Header>
        <Left>
          <Button transparents>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>CSD</Title>
        </Body>
      </Header>
      <Content padder>
        <Form>
          <Item floatingLabel rounded>
            <Input
              value={text}
              onChangeText={onChangeText}
              placeholder="Enter message to send"
            />
          </Item>
        </Form>
        <Label>{resultText}</Label>
        <Button primary block onPress={onOKButtonPressed}>
          <Text>OK</Text>
        </Button>
      </Content>
      <Footer>
        <Text>React Native Project Group</Text>
      </Footer>
    </Container>
  );
};

export default App;
