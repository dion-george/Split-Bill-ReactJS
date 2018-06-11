import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-amazing-grid';

export default function MessageView({message}) {
  return (
    <div>
      <div >
        <h2>{message.billName}</h2> 
      </div>
      <div className="horizontalLine">
      </div>
      <div>
        
        <table className="mainTable">
        <tr>
        <th>Amount: {message.amount}</th>
        <th>Paid by: {message.paidBy}</th>
    
        </tr>
        </table>


      </div>
      <div>
        <table className="memberTable">
  <tr>
    <th>Member</th>
    <th>Amount</th>
  </tr>
  <tr>
    <td>You</td>
    <td>Rs. {message.f1}</td>
  </tr>
  <tr>
    <td>Welisa</td>
    <td>Rs. {message.f2}</td>
  </tr>
    <tr>
    <td>Rohan</td>
    <td>Rs. {message.f3}</td>
  </tr>
    <tr>
    <td>Varun</td>
    <td>Rs. {message.f4}</td>
  </tr>
</table>
      
      </div>
        <div className="horizontalLine">
      </div>
      <span>*You need to pay Rs. {message.f1} to {message.paidBy}</span>
    
      <div>
      <button>
          Completed
        </button>
        <button>
        Delete
        </button>
      </div>

    </div>
  );
}

MessageView.propTypes = {
  message: PropTypes.object.isRequired
}
