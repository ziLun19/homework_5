import React, { Component } from "react";
import TodoList from "./ToDoList";
import Button from "@material-ui/core/Button";
import ToDoTitle from "./ToDoTitle"
import "./styles.css";
class App extends Component {
  state = {
    items: [],
    text: ""
  };
  handleTextChange = event => {
    this.setState({text: event.target.value});
  };
  handleAddItem = event => {
    event.preventDefault();
    var newItem = {
      id: Date.now(),
      text: this.state.text,
      done: false
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ""
    }));
  };
  markItemCompleted = itemId => {
    var updatedItems = this.state.items.map(item => {
      if (itemId === item.id) item.done = !item.done;
      return item;
    });
    this.setState({items: [].concat(updatedItems)});
  };
  handleDeleteItem = itemId => {
    var updatedItems = this.state.items.filter(item => {
      return item.id !== itemId;});
    this.setState({items: [].concat(updatedItems)});
  };
  render() {
    const divStyle = {
			width: '250px',
			margin: 'auto',
			textAlign: 'center',
		}; 
    return (
      <div style={divStyle}>
      <div>
        <ToDoTitle/>
        <div className="row">
          <div className="col-md-3">
            <TodoList
              items={this.state.items}
              onItemCompleted={this.markItemCompleted}
              onDeleteItem={this.handleDeleteItem}
            />
          </div>
        </div>
        <form className="row">
        <div className="column">
            <input
              type="text"
              className="form-control"
              onChange={this.handleTextChange}
              value={this.state.text}
            />
        </div>
            <Button
              variant="contained"
              className="btn_1"
              onClick={this.handleAddItem}
            >Add</Button>
        </form>
      </div>
      </div>
    );
  }
}
export default App;