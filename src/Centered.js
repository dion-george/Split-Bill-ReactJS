import React from 'react';
import Modal from 'react-responsive-modal';
import './custom-animation.css';
import './index.css';
import { Form, Text, Select, Checkbox} from 'react-form';
import {Container, Row, Col} from 'react-amazing-grid';


export default class Centered extends React.Component {
  
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
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Add
        </button>{' '}
        
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}
        >

        <h2>Add a bill </h2>
        <Form>
           <Container>
             <Row>
             <label htmlFor="amount">Title</label>
              <Text field="firstName" />
              <label htmlFor="amount">Amount</label>
              <Text field="firstName" className="inputStyle"  />
            </Row>
          <Row>
        <label> 
        <Checkbox />text
        </label>
      <Text field="firstName" id="text-input-disabled-firstName" disabled />
        </Row>
        <Row>
        <label htmlFor="status">Paid by</label>
        <Select field="status" id="status" options={statusOptions}  />
        </Row>
        <Row>
        <button type="submit">
          Submit
        </button>        
        </Row>
        </Container>
          </Form>




        </Modal>
      </div>
    );
  }
}












