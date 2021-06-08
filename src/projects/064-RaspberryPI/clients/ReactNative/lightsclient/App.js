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
const uriLightsServer = 'ws://192.168.1.127:5055';
const socketLight = new WebSocket(uriLightServer);
const socketLights = new WebSocket(uriLightsServer);

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
    setResultText(message.status);
  };

  socketLight.onclose = err => {
    console.log('Light Server:Error:', err.message);
    console.log('Light Server:Reason:', err.reason);
  };

  socketLights.onopen = () => {
    console.log('Lights Server:onopen', 'connected');
    socketLights.send('');
  };

  socketLights.onmessage = e => {
    console.log('received:', e.data.toString());
    let message = JSON.parse(e.data.toString());

    setActiveLights(message.lights.toString());
  };

  socketLights.onclose = err => {
    console.log('Lights Server:Error:', err.message);
    console.log('Lights Server:Reason:', err.reason);
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

  const onRefreshLightsButtonPressed = () => {
    setActiveLights('');
    socketLights.send('');
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

        <Button primary block onPress={onRefreshLightsButtonPressed}>
          <Text>Refresh Lights</Text>
        </Button>
      </Content>
      <Footer>
        <Text>React Native Project Group</Text>
      </Footer>
    </Container>
  );
};

export default App;
