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
                        <CardItem>
                            <Body>
                                <Text>C ve Sistem Programcıları Derneği
                                </Text>
                            </Body>
                        </CardItem>

                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>C ve Sistem Programcıları Derneği,
                                sistem programlama bakış açısıyla eğitimler ve danışmanlıklar
                                vermektedir
                                </Text>
                            </Body>
                        </CardItem>

                    </Card>
                </Content>
            </Container>
        )
    }
}
