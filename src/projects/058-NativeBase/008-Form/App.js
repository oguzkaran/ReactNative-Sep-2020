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
    Form,
    Item,
    Input
} from 'native-base';


export default class App extends Component {
    render()
    {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparents>
                            <Icon name="menu"/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>CSD</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Form>
                        <Item>
                            <Input placeholder="Input your name"/>
                        </Item>
                        <Item>
                            <Input placeholder="Input your username"/>
                        </Item>
                        <Item>
                            <Input placeholder="Input your password"/>
                        </Item>
                    </Form>

                    <Button primary block>
                        <Icon name="save"/>
                        <Text>Register</Text>
                    </Button>
                </Content>
                <Footer>
                    <Text>React Native Project Group</Text>
                </Footer>
            </Container>
        )
    }
}
