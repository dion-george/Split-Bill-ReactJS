import React from 'react';
import Comment from './Comment';
export default class Board extends React.Component {
 constructor (props){
    super(props);
    this.state = { 
    data: 
    [
    {"name":"test1",
            "paidPerson": "Dion",
            "age":18,
            "f1":"false",
            "f2":"false",
            "f3":"false",
            "f4":"false",
            "sp":5,
            "sm":5
            }

              ]
  } 
 }

add = (text) => {
    let dataTemp = this.state.data;
    dataTemp.push(text);
    this.setState({data:dataTemp})
   }


  removeComment = (i) => {
  console.log('Remove' + i);
  let dataTemp = this.state.data;
  console.log(dataTemp[i].name);
  this.setState({data:dataTemp})
  // splice dataTemp[i];
  delete dataTemp[i];
  }

  updateComment = (newText,newPP,newAge,nf1,nf2,nf3,nf4,nsp,nsm,i)=> {

console.log('hiii');
 let dataTemp = this.state.data;
  dataTemp[i].name = newText;
  dataTemp[i].paidPerson = newPP;
  dataTemp[i].age = newAge;
  this.setState({data:dataTemp});
      dataTemp[i].f1 = nf1;
  dataTemp[i].f2 = nf2;
  dataTemp[i].f3 = nf3;
  dataTemp[i].f4 = nf4;
  dataTemp[i].sp = nsp;
  dataTemp[i].sm = nsm;    

  }


  
  eachComment = (d, idx) => {
  return(<Comment key={idx}
    index = {idx} 
    dd={d}
    updateCommentText={this.updateComment}
    deleteFromBoard={this.removeComment}></Comment>);
   }

render() {
    return (
       <div>
       <div>
       <button onClick={this.add.bind()}> Add Bill </button>
       </div>
       <div>
          {this.state.data.map(this.eachComment)}
      </div>
      </div>
    );
  }
}