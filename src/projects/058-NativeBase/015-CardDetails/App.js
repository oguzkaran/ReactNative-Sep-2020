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
    Icon
} from 'native-base';

export default class App extends Component {
    render()
    {
        return (
            <Container>
            <Header>
                <Item>
                    <Icon name="people"/>
                    <Text>Native Base</Text>
                </Item>
            </Header>
                <Content>
                    <Card>
                        <CardItem header bordered button onPress={() => alert('C ve Sistem Programcıları Derneği')}>
                            <Body>
                                <Text>CSD
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>C ve Sistem Programcıları Derneği,
                                sistem programlama bakış açısıyla eğitimler ve danışmanlıklar
                                vermektedir
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Body>
                                <Text>React Native Project Group
                                </Text>
                            </Body>
                        </CardItem>

                    </Card>




                </Content>
            </Container>
        )
    }
}
