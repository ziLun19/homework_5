import React from 'react';
import ReactDOM from 'react-dom';
import ToDoAddForm from './ToDoAddForm';
import ToDoTitle from './ToDoTitle';
import ToDoList from './ToDoList';
const Todoapp=()=>{
  var todoItems = [];
  todoItems.push({index: 1, value: "React 最後一個範例 ToDoList", done: false});
  todoItems.push({index: 2, value: "React/ReactJS單向資料流", done: true});
  class TodoApp extends React.Component {
    constructor (props) {
      super(props);
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.TodoDone = this.TodoDone.bind(this);
      this.state = {todoItems: todoItems};
    }
    addItem(todoItem) {
      todoItems.unshift({
        index: todoItems.length+1, 
        value: todoItem.newItemValue, 
        done: false
      });
      this.setState({todoItems: todoItems});
    }
    removeItem (itemIndex) {
      todoItems.splice(itemIndex, 1);
      this.setState({todoItems: todoItems});
    }
    TodoDone(itemIndex) {
      var todo = todoItems[itemIndex];
      todoItems.splice(itemIndex, 1);
      todo.done = !todo.done;
      todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
      this.setState({todoItems: todoItems});
    }
    render() {
      return (
        <div id="main">
          <ToDoTitle />
          <ToDoList items={this.props.initItems} removeItem={this.removeItem} TodoDone={this.TodoDone}/>
          <ToDoAddForm addItem={this.addItem} />
        </div>
      );
    }
  }
  ReactDOM.render(<TodoApp initItems={todoItems}/>, document.getElementById('root'));
}
export default Todoapp;