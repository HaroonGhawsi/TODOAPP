import React from 'react';

var TodoList = React.createClass({
  render: function() {
    var createItem = function(item) {
      return <li key={item.id}>{item.text}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  onClickItems: function(e){
      this.state.items.pop();
      this.setState(this.state);
  },
 
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        
          <input onChange={this.onChange} value={this.state.text} />
          <button onClick={this.handleSubmit}>{'Add #' + (this.state.items.length + 1)}</button>
          <button onClick={this.onClickItems}>{'Remove #' + (this.state.items.length - 1)}</button>
        
      </div>
    );
  }
});

export default TodoApp;