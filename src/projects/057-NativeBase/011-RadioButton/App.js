import React, {Component} from 'react';

import {
    Container,
    Content,
    Body,
    Header,
    Title,
    Left,
    Right,
    Button,
    Text,
    Icon,
    Footer,
    CheckBox,
    ListItem,
    DatePicker,
    Radio,
    H2
} from 'native-base';

const maritalStatusText = ["Evli", "Bekar", "Boşanmış"]
const educationText = ["Lise", "Üniversite", "Yüksek Lisans", "Doktora"]

export default class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
          educationCheckedIndex: 0,
          maritalStatusCheckedIndex: 1
      };
      this.onSaveButtonClicked = this.onSaveButtonClicked.bind(this)
    }

    onSaveButtonClicked()
    {
        //Aşağıdaki kod dizi ile de daha pratik çözülebilir
        const {educationCheckedIndex, maritalStatusCheckedIndex} = this.state
        let msg = ""

        msg += educationText[educationCheckedIndex] + " " + maritalStatusText[maritalStatusCheckedIndex - 1]

        alert(msg)
    }

    render()
    {
        const {
            educationCheckedIndex,
            maritalStatusCheckedIndex
        } = this.state

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="menu"/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>CSD</Title>
                    </Body>
                </Header>

                <Content>
                    <ListItem>
                        <H2>Eğitim Durumu</H2>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Lise</Text>
                        </Left>
                        <Right>
                            <Radio
                                selected={educationCheckedIndex == 0}
                                color={'black'}
                                onPress={() => this.setState({educationCheckedIndex: 0})}/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Üniversite</Text>
                        </Left>
                        <Right>
                            <Radio
                                selected={educationCheckedIndex == 1}
                                color={'black'}
                                onPress={() => this.setState({educationCheckedIndex: 1})}/>
                        </Right>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Text>Yüksek Lisans</Text>
                        </Left>
                        <Right>
                            <Radio
                                selected={educationCheckedIndex == 2}
                                color={'black'}
                                onPress={() => this.setState({educationCheckedIndex: 2})}/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Doktora</Text>
                        </Left>
                        <Right>
                            <Radio
                                selected={educationCheckedIndex == 3}
                                color={'black'}
                                onPress={() => this.setState({educationCheckedIndex: 3})}/>
                        </Right>
                    </ListItem>

                    <ListItem>
                        <H2>Medeni Durumu</H2>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Text>Evli</Text>
                        </Left>
                        <Right>
                            <Radio
                                selected={maritalStatusCheckedIndex == 1}
                                color={'black'}
                                onPress={() => this.setState({maritalStatusCheckedIndex: 1})}/>
                        </Right>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Text>Bekar</Text>
                        </Left>
                        <Right>
                            <Radio
                                selected={maritalStatusCheckedIndex == 2}
                                color={'black'}
                                onPress={() => this.setState({maritalStatusCheckedIndex: 2})}/>
                        </Right>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Text>Boşanmış</Text>
                        </Left>
                        <Right>
                            <Radio
                                selected={maritalStatusCheckedIndex == 3}
                                color={'black'}
                                onPress={() => this.setState({maritalStatusCheckedIndex: 3})}/>
                        </Right>
                    </ListItem>

                    <Button iconLeft block onPress={this.onSaveButtonClicked}>
                        <Icon name="save"/>
                        <Text>Kaydet</Text>
                    </Button>

                </Content>
                <Footer>
                    <Text>React Native Project Group</Text>
                </Footer>
            </Container>
        )
    }
}
