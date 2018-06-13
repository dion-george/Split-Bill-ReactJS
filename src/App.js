import React, { Component } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import {Container, Row, Col} from 'react-amazing-grid';
import Centered from './Centered';

import Board from './Board';
import MessageList from './message-list';


class App extends Component {
    render() {
    return (
      <div className = "mainBody">
<div className="navBar">
  
<ul>
  <li className="navli"><a href="#home">Home</a></li>
  <li className="navli"><a href="#news">News</a></li>
  <li  className="navli" ><a href="#contact">Contact</a></li>
  <li className="rightNav"><a href="#about">About</a></li>
  <li className="rightNav"><a href="#Next">Next</a></li>
</ul>

</div>
      <Container>
        <Row>
        <Col xs={1} xsoffset={1}>
        </Col>
        <Col xs={7} xsoffset={1}>
          <div className="ListDiv">
              <h3> Testing </h3>

              <Board />
          </div>
        </Col>
        <Col xs={3} xsoffset={4}>
        <div className = "members">
          <Centered />
          <div className="name"> 
          <h2> Dion George </h2>
          <h3> Balance: Rs. 30 </h3>
          </div>
  <table className="membersSidebar">
  <tr>
    <th>Group</th>

  </tr>
  <tr>
    <td>You</td>
  </tr>
  <tr>
    <td>Welisa</td>
  </tr>
  <tr>
    <td>Rohan</td>
  </tr>
  <tr>
    <td>Varun</td>
  </tr>

</table>

        </div>
        </Col>
        </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;
