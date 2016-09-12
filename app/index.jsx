import React from 'react';
import ReactDOM from 'react-dom';

let currentUser = 'John'
let currentUserStyle = {
    color: 'red',
    textDecoration: 'underline'
}

class HelloMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {text: 'This is Message 1', time: '1/1/2016 11:36 pm', user:'John'},
        {text: 'This is Message 2', time:'1/2/2016 11:37 pm', user: 'Amy'},
        {text: 'This is Message 3', time:'1/3/2016 11:38 pm', user: 'John'},
        {text: 'This is Message 4', time:'1/4/2016 11:39 pm', user: 'Amy'},
        {text: 'This is Message 5', time:'1/5/2016 11:40 pm', user: 'John'},
        {text: 'This is Message 6', time: '1/6/2016 11:41 pm', user:'Amy'},
        {text: 'This is Message 7', time: '1/7/2016 11:42 pm', user: 'Amy'},
      ]
    }
  }

  _updateNewItem = (event) => {
    this.setState({newItem: event.target.value})
  }
  
  render() {
      var mess = this.state.messages.map(function(message, i){
      if (currentUser === message.user)
          return (<li style={currentUserStyle} key={i} className="message">{message.text}, created by:{message.user}@{message.time}</li>);
            else return(<li key={i} className="message">{message.text}, created by:{message.user}@{message.time}</li>)
      });
//
return (
  <div>
    <form onSubmit={this._addTodo}>
      <input value={this.state.newItem} onChange={this._updateNewItem} />
      <button type="submit">Send Message</button>
    </form>
    <ul>{mess}</ul>
    {(() => {
if(this.state.messages.length > 3)
      return <input type="submit" value="Load More"></input>;
})()}
  </div>
);
  }
}

var mountPoint = document.querySelector('#root');
ReactDOM.render(<HelloMessage/>, mountPoint);
