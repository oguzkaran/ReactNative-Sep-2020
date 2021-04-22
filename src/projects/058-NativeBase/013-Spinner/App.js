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
    Input,
    Spinner
} from 'native-base';

export default class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
          searchAnimating: false,
          maritalStatusCheckedIndex: 1
      };
      this.onSearchButtonClicked = this.onSearchButtonClicked.bind(this)
    }

    onSearchButtonClicked()
    {
        const {searchAnimating} = this.state
        this.setState({searchAnimating: !searchAnimating})
    }

    render()
    {
        const {
            searchAnimating
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
                    <Button block rounded onPress={this.onSearchButtonClicked}>
                        <Icon name="search"/>
                        <Text>Bul</Text>
                    </Button>
                    <Spinner color='blue' animating={searchAnimating}/>
                    <Spinner color='red'/>
                </Content>
                <Footer>
                    <Text>React Native Project Group</Text>
                </Footer>
            </Container>
        )
    }
}
