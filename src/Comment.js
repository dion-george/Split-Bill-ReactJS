import React from 'react';

export default class Comment extends React.Component {

   constructor(props) {
    super(props);
    this.state = { editing: true };
     }


edit = () => {
this.setState({editing:true});
   }
remove = () => {
this.props.deleteFromBoard(this.props.index)
 }

 save = () => {
 	  this.props.updateCommentText(this.refs.newText.value,this.props.index);
 	  
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
          <input ref="newText" defaultValue={this.props.children}></input>
          <button onClick={this.save}> Save </button>
        </div>
      );
  }


 render (){
    if (this.state.editing) {
      return this.renderForm();
    }else{
      return this.renderNormal();
    } 	
 }
}
  