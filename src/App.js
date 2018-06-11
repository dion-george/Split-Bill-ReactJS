import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col} from 'react-amazing-grid';
import Centered from './Centered';
import Comment from './Comment';
import MessageList from './messages/message-list';

class App extends Component {
    render() {
    return (
      <div className="containerList">

      <Container>
        <Row>
        <Col xs={3} xsoffset={1}>
          <h1 className="App-text">Name:</h1>
        </Col>
        <Col xs={3} xsoffset={1}>
          <h1 className="App-text">Balance:</h1>
        </Col>
        <Col xs={3} xsoffset={1}>
          <Centered />
        </Col>
        </Row>
        
        <Row>
        <Col xs={8} xsoffset={1}>
          <div className="ListDiv">
              <MessageList />
          </div>
        </Col>
        <Col xs={3} xsoffset={4}>
        <div className = "members">
          <h1 className="App-text">Members:</h1>
        
          <h3 className="App-text">Friend1</h3>
          <h3 className="App-text">Friend2</h3>
          <h3 className="App-text">Friend3</h3>
          <h3 className="App-text">Friend4</h3>
        </div>
        </Col>
        </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;
