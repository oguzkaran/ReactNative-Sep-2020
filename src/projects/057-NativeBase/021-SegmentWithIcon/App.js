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
    Button,
    Segment,
    Left,
    Right
} from 'native-base';

export default class App extends Component {
    constructor(props) {
      super(props);

      this.state = {text: "Prev"};
      this.onPrevButtonClicked = this.onPrevButtonClicked.bind(this)
      this.onNextButtonClicked = this.onNextButtonClicked.bind(this)
    }

    onPrevButtonClicked()
    {
        const {text} = this.state

        this.setState({text: "Prev"})
    }

    onNextButtonClicked()
    {
        const {text} = this.state

        this.setState({text: "Next"})
    }


    render()
    {
        const {text} = this.state

        return (
            <Container>
                <Header hasSegment>
                    <Left>
                        <Button transparent>
                            <Icon name="search"/>
                        </Button>
                    </Left>
                    <Body>
                        <Segment>
                            <Button first onPress={this.onPrevButtonClicked}><Icon name="arrow-back"/></Button>
                            <Button first onPress={this.onNextButtonClicked}><Icon name="arrow-forward"/></Button>
                        </Segment>
                    </Body>
                    <Right>
                        <Button transparent><Icon name="people"/></Button>
                    </Right>

                </Header>
                <Content>
                    <Text>{text}</Text>
                </Content>
            </Container>
        )
    }
}
