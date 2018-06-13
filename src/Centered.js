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

</div>

        </Modal>

      </div>
    );
  }
}












