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

//TODO: native-base radio ile hangi server'a göndereceğini belirleyecek şekle getiriniz
const uri = 'ws://161.97.141.113:5055';
const socket = new WebSocket(uri);

const App = () => {
  const [text, onChangeText] = useState('');
  const [resultText, setResultText] = useState('');
  socket.onopen = () => {
    console.log('onopen', 'connected');
  };

  socket.onmessage = e => {
    console.log('Received:', e.data);
    setResultText(e.data.toString());
  };

  socket.onclose = err => {
    console.log('Error:', err.message);
  };
  socket.onclose = e => {
    console.log('Code:', e.code);
    console.log('Reason:', e.reason);
  };

  const onOKButtonPressed = () => {
    socket.send(text);
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
