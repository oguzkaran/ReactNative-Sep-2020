import React, {Component} from 'react';

import {
  Container,
  Content,
  Header,
  Body,
  Text,
  Button,
  Title,
  Card,
  CardItem,
} from 'native-base';

import {inc, dec, reset, reload} from '../actions';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Counter extends Component {
  render() {
    const {count, inc, dec, reset, reload} = this.props;

    return (
      <Container>
        <Header>
          <Body>
            <Title>CSD</Title>
          </Body>
        </Header>

        <Content>
          <Card>
            <CardItem>
              <Text>{count}</Text>
            </CardItem>
          </Card>
          <Button block onPress={() => inc()}>
            <Text>Artır</Text>
          </Button>

          <Button block onPress={() => dec()}>
            <Text>Azalt</Text>
          </Button>

          <Button block onPress={() => reset()}>
            <Text>Sıfırla</Text>
          </Button>
          <Button block onPress={() => reload()}>
            <Text>Geri Yükle</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapToStateProps = state => {
  return {count: state.count};
};

const matchDispatchToProps = dispath =>
  bindActionCreators(
    {inc: inc, dec: dec, reset: reset, reload: reload},
    dispath,
  );

export default connect(mapToStateProps, matchDispatchToProps)(Counter);
