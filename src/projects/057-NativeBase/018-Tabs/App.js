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
    Button,
    Tabs,
    Tab,
    TabHeading
} from 'native-base';

export default class App extends Component {
    constructor(props) {
      super(props);

      this.state = {tabChangeCount: 0};
    }
    render()
    {
        const {tabChangeCount} = this.state

        return (
            <Container>
                <Header hasTabs>
                    <Text>Tab change Count:{tabChangeCount}</Text>
                </Header>
                <Tabs onChangeTab={() => this.setState({tabChangeCount: tabChangeCount + 1})}>
                    <Tab heading="Chat">
                        <Button block><Text>Tab1 OK Button</Text></Button>
                    </Tab>

                    <Tab heading={<TabHeading><Icon name="people"/><Text>Contacts</Text></TabHeading>}>
                        <Button block><Text>Tab2 OK Button</Text></Button>
                    </Tab>

                    <Tab heading="Call Log">
                        <Button block><Text>Tab3 OK Button</Text></Button>
                    </Tab>

                    <Tab heading="About">
                        <Button block onPress={() => alert('C ve Sistem Programcıları Derneği')}>
                            <Thumbnail small source={require("./images/csd.gif")}/>
                            <Text>CSD</Text>
                        </Button>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}
