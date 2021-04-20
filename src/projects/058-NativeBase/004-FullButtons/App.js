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
                    <Button danger full>
                        <Text>Alert</Text>
                    </Button>
                    <Button primary full>
                        <Text>Save</Text>
                    </Button>
                    <Button info full>
                        <Text>What?</Text>
                    </Button>
                    <Button success full>
                        <Text>OK</Text>
                    </Button>

                    <Button dark full>
                        <Text>Disconnect</Text>
                    </Button>

                    <Button transparent full>
                        <Text>Transparent</Text>
                    </Button>

                    <Button light full>
                        <Text>Disable</Text>
                    </Button>

                    <Button disabled full>
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
