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
    Input,
    Label
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
                        <Item floatingLabel rounded>
                            <Icon name="people"/>
                            <Label>Name</Label>
                            <Input/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input/>
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
