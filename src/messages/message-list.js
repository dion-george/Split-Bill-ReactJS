import React, { Component } from 'react';

import MessageView from './message-view';

class MessageList extends Component {

  state = {
    messages:  [
      {
        billName: 'Dinner at the Restaurant',
        amount: '20',
        paidBy: 'someone',
        f1: '21',
        f2: '22',
        f3: '33',
        f4: '23',

      },
      {
        billName: 'Dinner at the Restaurant',
        amount: '20',
        paidBy: 'someone',
        f1: '21',
        f2: '22',
        f3: '33',
        f4: '23',

      },
    ]
  }

  render() {
    const messages  = this.state.messages.map(function(message, index) {
      return(
        <MessageView key={index} message={message} />
      )
    })
    return(
      <div>
        {messages}
      </div>
    )
  }
}

export default MessageList;
