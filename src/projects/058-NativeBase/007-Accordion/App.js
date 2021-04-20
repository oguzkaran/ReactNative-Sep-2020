import React, {Component} from 'react';

import {Container, Content, Body, Header, Title, Left, Button, Text, Icon, Footer, Accordion} from 'native-base';

const data = [
    {title:'Türkiye', content: 'Ankara'},
    {title:'Avusturalya', content: 'Sydney'},
    {title:'Belçika', content: 'Bürüksel'}
]

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
                    <Accordion dataArray={data} expanded={0}/>
                </Content>
                <Footer>
                    <Text>React Native Project Group</Text>
                </Footer>
            </Container>
        )
    }
}
