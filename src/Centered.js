import React from 'react';
import Modal from 'react-responsive-modal';
import './custom-animation.css';
import './index.css';

import {Container, Row, Col} from 'react-amazing-grid';
import Form from "./Form";

export default class Centered extends React.Component {
 
   state = {    
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };
 
 
 state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {



 const statusOptions = [
    {
      label: 'Me',
      value: 'Me',
    },
    {
      label: 'Friend1',
      value: 'Friend1',
    },
    {
      label: 'Friend2',
      value: 'Friend2',
    },
    {
      label: 'Friend3',
      value: 'Friend3',
    },
  ]




    const { open } = this.state;
    return (
      <div className="example">
        <button className="addBillBtn" onClick={this.onOpenModal}>
          <span>Add Bill</span>
        </button>
        
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}
        >
<div>
<Form onChange={fields => this.onChange(fields)} />
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p>
</div>

        </Modal>
      </div>
    );
  }
}












