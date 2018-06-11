import React from 'react';


export default class Comment extends React.Component {
  
   constructor(props) {
    super(props);
    this.state = { editing: false };
     }

edit = () => {
    this.setState({editing:true});
   }
remove() {
    alert('remove comment');
 }

 save() {
  var val = this.refs.newText.value;
    this.setState({editing:false});
 }
  
  renderNormal(){
    return(
      <div>
        <h2> {this.props.children} </h2>
        <button onClick={this.edit}> Edit </button>
        <button onClick={this.remove}> Remove </button>
      </div>  
      );
  }

  renderForm(){
    return(
        <div>
          <textarea ref="newText" defaultValue={this.props.children}></textarea>
          <button onClick={this.save}> Save </button>
        </div>
      );
  }
  render() {
    if (this.state.editing) {
      return this.renderForm();
    }else{
      return this.renderNormal();
    }
  }
}


