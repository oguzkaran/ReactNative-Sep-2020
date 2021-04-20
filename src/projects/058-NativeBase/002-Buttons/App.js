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
                    <Button danger block rounded>
                        <Text>Alert</Text>
                    </Button>
                    <Button primary block rounded>
                        <Text>Save</Text>
                    </Button>
                    <Button info block rounded>
                        <Text>What?</Text>
                    </Button>
                    <Button success block rounded>
                        <Text>OK</Text>
                    </Button>

                    <Button dark block rounded>
                        <Text>Disconnect</Text>
                    </Button>

                    <Button transparent block>
                        <Text>Transparent</Text>
                    </Button>

                    <Button light block rounded>
                        <Text>Disable</Text>
                    </Button>

                    <Button disabled block rounded>
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
