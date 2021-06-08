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

const uriLightServer = 'ws://192.168.1.127:5054';
const socketLight = new WebSocket(uriLightServer);

const TYPE_STATUS = 0;
const TYPE_ACTIVE_LIGHTS = 1;

const App = () => {
  const [countStr, setCountStr] = useState('0');
  const [ioNoStr, setIoNoStr] = useState('1');
  const [resultText, setResultText] = useState('');
  const [activeLights, setActiveLights] = useState('');

  socketLight.onopen = () => {
    console.log('Light Server:onopen', 'connected');
  };

  socketLight.onmessage = e => {
    console.log('received:', e.data.toString());
    let message = JSON.parse(e.data.toString());
    if (message.type === TYPE_STATUS)
      setResultText(message.status);
    else if (message.type === TYPE_ACTIVE_LIGHTS)
      setActiveLights(message.lights.toString())
  };

  socketLight.onclose = err => {
    console.log('Light Server:Error:', err.message);
    console.log('Light Server:Reason:', err.reason);
  };

  const onOKButtonPressed = () => {
    let count = parseInt(countStr, 10);
    let ioNo = parseInt(ioNoStr, 10);

    if (!isNaN(count) && !isNaN(ioNo)) {
      let data = {n: count, ioNo: ioNo};
      socketLight.send(JSON.stringify(data));
    }
    else
      alert('invalid count and/or io number');
  };

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>CSD</Title>
        </Body>
      </Header>
      <Content padder>
        <Form>
          <Item>
            <Input
              value={countStr}
              onChangeText={setCountStr}
              placeholder="Enter count"
            />
          </Item>

          <Item>
            <Input
              value={ioNoStr}
              onChangeText={setIoNoStr}
              placeholder="Enter enter light no"
            />
          </Item>
        </Form>
        <Label>{activeLights}</Label>
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
