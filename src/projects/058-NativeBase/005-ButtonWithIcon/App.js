import React, {Component} from 'react';

import {Container, Content, Body, Header, Title, Left, Button, Text, Icon, Footer} from 'native-base';

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
                <Content>
                    <Button iconLeft danger full>
                        <Icon name='trash'/>
                        <Icon name='beer'/>
                        <Text>Remove</Text>
                    </Button>
                    <Button primary full>
                        <Icon name='people'/>
                        <Text>Contact List</Text>
                    </Button>

                    <Icon name='beer'/>

                    <Button iconleft dark full rounded>
                        <Icon name="cog"/>
                        <Text>Settings</Text>
                    </Button>
                </Content>
                <Footer>
                    <Text>React Native Project Group</Text>
                </Footer>
            </Container>
        )
    }
}
