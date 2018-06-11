import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col} from 'react-amazing-grid';
import Centered from './Centered';
import Comment from './Comment';

class App extends Component {
    render() {
    return (
      <div className="App">

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
        <Comment> Dion1 </Comment>
        <Comment> Dion2 </Comment>
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
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
