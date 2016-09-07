import React from 'react'
import ReactDOM from 'react-dom'


// class MessageInput extends React.Component {
// componentFocus() {
//    if (ReactDOM.findDOMNode(myInput) !== null)
//    { ReactDOM.findDOMNode(myInput).focus() } }
//
//   render(){
//     return(
//       <div>
//       <input id='myInput' type='text' onClick={this.componentFocus}/>
//       <br></br>
//       <input type="submit" value="Send"></input>
//       <ul>{messages[1]}</ul>
//       </div>
//     )
//   }
// }
//
// const entry = document.getElementById('root');
// ReactDOM.render(<MessageInput />, entry)

let currentUser = 'John'
var currentUserStyle = {
    color: 'red',
    textDecoration: 'underline'
}

class MessageInput extends React.Component {
  componentFocus() {
     if (ReactDOM.findDOMNode(myInput) !== null)
     { ReactDOM.findDOMNode(myInput).focus() } }
  constructor() {
    super();

    this.state = {
      test: [
          {text: 'This is Message 1', time: '1/1/2016 11:36 pm', user:'John'},
          {text: 'This is Message 2', time:'1/2/2016 11:37 pm', user: 'Amy'},
          {text: 'This is Message 3', time:'1/3/2016 11:38 pm', user: 'John'},
          {text: 'This is Message 4', time:'1/4/2016 11:39 pm', user: 'Amy'},
          {text: 'This is Message 5', time:'1/5/2016 11:40 pm', user: 'John'},
          {text: 'This is Message 6', time: '1/6/2016 11:41 pm', user:'Amy'},
          {text: 'This is Message 7', time: '1/7/2016 11:42 pm', user: 'Amy'},
      ]
    };
  }
  render(){
    var messages = this.state.test.map(function(test, i){
      if (i < 3){
      if (currentUser === test.user)
    return ([<li style={currentUserStyle}>{test.user}</li>,
            <li style={currentUserStyle}>{test.text}</li>,
            <li style={currentUserStyle}>{test.time}</li>])
        else return ([<li>{test.user}</li>,
              <li>{test.text}</li>,
              <li>{test.time}</li>])
                };
});
    return(
      <div>
      <input id='myInput' type='text' onClick={this.componentFocus}/>
      <br></br>
      <input type="submit" value="Send"></input>
      <br></br>
      <ul>{messages}</ul>
      {(() => {
if(this.state.test.length > 3)
        return <input type="submit" value="Load More"></input>;
    else
        return "I'm all alone... and sad";
})()}
      </div>
    )
  }
}
//

//
const entry = document.getElementById('root');
ReactDOM.render(<MessageInput />, entry)
