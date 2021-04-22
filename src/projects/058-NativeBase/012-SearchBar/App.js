import React, {Component} from 'react';

import {
    Container,
    Content,
    Body,
    Header,
    Title,
    Left,
    Right,
    Button,
    Text,
    Icon,
    Footer,
    Item,
    Input
} from 'native-base';

export default class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
          educationCheckedIndex: 0,
          maritalStatusCheckedIndex: 1
      };
      this.onSaveButtonClicked = this.onSaveButtonClicked.bind(this)
    }

    onSaveButtonClicked()
    {

        let msg = ""


        alert(msg)
    }

    render()
    {
        const {
            educationCheckedIndex,
            maritalStatusCheckedIndex
        } = this.state

        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="search"/>
                        <Input placeholder="Ara"/>
                        <Icon name="people"/>
                    </Item>
                </Header>

                <Content>
                    <Button block rounded>
                        <Icon name="search"/>
                        <Text>Bul</Text>
                    </Button>
                </Content>
                <Footer>
                    <Text>React Native Project Group</Text>
                </Footer>
            </Container>
        )
    }
}
