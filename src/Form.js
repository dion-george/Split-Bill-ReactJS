import React from "react";

export default class Form extends React.Component {
  state = {
    billName: "",
    amount: "",
  }

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.billName);
    console.log(this.state.amount);

    this.setState({
      
      billName: "",
      amount: "",
    });
    this.props.onChange({
      billName: "",
      amount: "",
    });
  };

  render() {
    return (
      <form>  
        <input
          name="billName"
          placeholder="Bill Name"
          value={this.state.billName}
          ref={(c) => this.title = c}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="amount"
          placeholder="Amount"
          value={this.state.amount}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
