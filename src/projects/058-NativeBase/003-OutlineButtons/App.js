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
                    <Button danger block rounded bordered>
                        <Text>Alert</Text>
                    </Button>
                    <Button primary block rounded bordered>
                        <Text>Save</Text>
                    </Button>
                    <Button info block rounded bordered>
                        <Text>What?</Text>
                    </Button>
                    <Button success block rounded bordered>
                        <Text>OK</Text>
                    </Button>

                    <Button dark block rounded bordered>
                        <Text>Disconnect</Text>
                    </Button>

                    <Button transparent block bordered>
                        <Text>Transparent</Text>
                    </Button>

                    <Button light block rounded bordered>
                        <Text>Disable</Text>
                    </Button>

                    <Button disabled block rounded bordered>
                        <Text>Disabled</Text>
                    </Button>

                </Content>
                <Footer>
                    <Text>React Native Project Group</Text>
                </Footer>
            </Container>
        )
    }
}
