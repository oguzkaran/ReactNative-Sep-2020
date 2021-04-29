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
    Icon,
    Thumbnail,
    Left,
} from 'native-base';

export default class App extends Component {
    constructor(props) {
      super(props);

      this.state = {likeCounter: 0};
    }
    render()
    {
        const {likeCounter} = this.state

        return (
            <Container>
            <Header>
                <Item>
                    <Icon name="logo-linkedin"/>
                    <Text>Native Base</Text>
                </Item>
            </Header>
                <Content>
                    <Card>
                        <CardItem header bordered button onPress={() => alert('C ve Sistem Programcıları Derneği')}>
                            <Thumbnail square small source={require('./images/csd.jpg')}/>
                            <Text>CSD</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Thumbnail square large source={require('./images/csd.bmp')}/>
                            <Body>
                                <Text>C ve Sistem Programcıları Derneği,
                                sistem programlama bakış açısıyla eğitimler ve danışmanlıklar
                                vermektedir
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Text>React Native Project Group </Text>
                            <Thumbnail circle small source={require('./images/csd.gif')}/>
                            <Thumbnail square source={{uri: 'https://i.ytimg.com/vi/YzrAHP0TovY/maxresdefault.jpg'}}/>
                            <Thumbnail circle large source={require('./images/csd.gif')}/>
                        </CardItem>
                        <CardItem footer bordered button>
                            <Body>
                            <Text>React Native Project Group</Text>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered button onPress={() => this.setState({likeCounter:likeCounter + 1})}>
                                <Left>
                                    <Icon name='thumbs-up'/>
                                </Left>
                                <Text>Beğen:{likeCounter}</Text>                            
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}
