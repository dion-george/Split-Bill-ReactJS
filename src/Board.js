import React from 'react';
import Comment from './Comment';


class Board extends React.Component {
  
  state = {
    messages:  [
      {
        from: 'John',
        message: 'The event will start next week',
        status: 'unread'
      },
      {
        from: 'Martha',
        message: 'I will be travelling soon',
        status: 'read'
      },
      {
        from: 'Jacob',
        message: 'Talk later. Have a great day!',
        status: 'read'
      }
    ]
  }

  render() {
    const messages  = this.state.messages.map(function(message, index) {
      return(
        <Comment key={index} message={message} />
      )
    })
    return(
      <div>
        <h1>List of Messages</h1>
        {messages}
      </div>
    )
  }
}

export default Board;
