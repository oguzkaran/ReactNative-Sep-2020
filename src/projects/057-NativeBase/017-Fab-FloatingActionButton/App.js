import React, {Component} from 'react';

import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Body,
    Text,
    Item,
    Icon,
    Thumbnail,
    Left,
    Fab,
    View,
    Button
} from 'native-base';

export default class App extends Component {
    constructor(props) {
      super(props);

      this.state = {likeCounter: 0, isActive: false};
    }
    render()
    {
        const {likeCounter, isActive} = this.state

        return (
            <Container>
                <Header />
                <View style={{ flex: 1 }}>
                  <Fab
                    active={isActive}
                    direction="up"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.setState({ isActive: !isActive})}>
                    <Icon name="share" />
                    <Button style={{ backgroundColor: '#34A34F' }}>
                      <Icon name="logo-whatsapp" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                      <Icon name="logo-facebook" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#DD5144' }}>
                      <Icon name="mail" />
                    </Button>
                    <Button transparent>
                      <Thumbnail small source={require('./images/csd.gif')} />
                    </Button>
                  </Fab>
                </View>
          </Container>
        )
    }
}
