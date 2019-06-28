// Play off example test
import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Body  } from "native-base";
//components
import PlayOffsContainer from './src/Playoffs/containers/PlayOffsContainer';

class App extends Component {
  render() {
      return (
        <Container>
          <Content>
            <Card>
              <CardItem header>
                <Text>playOffs</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Ejemplo de una estructura en arbol para un torneo de playOffs</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <PlayOffsContainer/>
                </Body>
              </CardItem>
            </Card>
          </Content>
      </Container>
      );
    }
  }
    export default App;