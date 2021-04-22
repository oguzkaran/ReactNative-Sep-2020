import React, {Component} from 'react';

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
    CheckBox,
    ListItem
} from 'native-base';

export default class App extends Component {
    constructor(props) {
      super(props);

      this.state = {englishChecked : true, germanChecked: false, frenchChecked: false};
      this.onSaveButtonClicked = this.onSaveButtonClicked.bind(this)
    }

    onSaveButtonClicked()
    {
        //Aşağıdaki kod dizi ile de daha pratik çözülebilir
        let msg = ""
        const {englishChecked, germanChecked, frenchChecked} = this.state

        msg += englishChecked ? "İngilizce" : ""
        msg += germanChecked ? " Almanca" : ""
        msg += frenchChecked ? " Fransızca" : ""

        alert(msg)
    }

    render()
    {
        const {englishChecked, germanChecked, frenchChecked} = this.state

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="menu"/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>CSD</Title>
                    </Body>
                </Header>

                <Content>
                    <ListItem>
                        <CheckBox checked={englishChecked} color='red' onPress={() => this.setState({englishChecked: !englishChecked})} />
                        <Body>
                            <Text>İnglizce</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={germanChecked} color='green' onPress={() => this.setState({germanChecked: !germanChecked})}/>
                        <Body>
                            <Text>Almanca</Text>
                        </Body>
                    </ListItem>

                    <ListItem>
                        <CheckBox checked={frenchChecked}  color='blue' onPress={() => this.setState({frenchChecked: !frenchChecked})}/>
                        <Body>
                            <Text>Fransızca</Text>
                        </Body>
                    </ListItem>
                    <Button iconLeft block onPress={this.onSaveButtonClicked}>
                        <Icon name="save"/>
                        <Text>Kaydet</Text>
                    </Button>
                </Content>
                <Footer>
                    <Text>React Native Project Group</Text>
                </Footer>
            </Container>
        )
    }
}
