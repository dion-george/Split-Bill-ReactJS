import React from 'react';
import Comment from './Comment';
export default class Board extends React.Component {

constructor(props) {
    super(props);
    this.state = { 
    	comments:  [
       'John',
      'The event will start next week',
      'unread'
      
      ]
     }
   }

   add = (text) => {
   	var arr = this.state.comments;
   	arr.push(text);
   	this.setState({comments:arr})
   }

     removeComment = (i) => {
  	console.log('Remove' + i);
  	var arr = this.state.comments;
  	arr.splice(i,1);
  	this.setState({comments:arr})
  }

  updateComment = (newText,i)=> {
  	console.log('update');
  	var arr = this.state.comments;
  	arr[i] = newText;
  	this.setState({comments:arr})
  }

   eachComment = (text,i) => {
	return(<Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>{text}</Comment>);
   }

  render() {
    return(
        <div>
        <button onClick={this.add.bind(null,'Bill')}> Add Bill </button>
         <div>
        {this.state.comments.map(this.eachComment)}
      </div>
      </div>
      );
	}
}