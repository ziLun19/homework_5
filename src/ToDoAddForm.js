import React from 'react';

class ToDoAddForm extends React.Component { 
  constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	formSubmit = (e) => {
		const { onAddItem } = this.props;
		e.preventDefault();
		onAddItem(this.inputRef.current.value);
		this.inputRef.current.value = '';
	}

	render() {
		return(
			<form onSubmit={this.formSubmit}>
				<input type="text" name="todoItem" ref={this.inputRef} autoComplete="off" />
				<button type="submit" value="submit">Add</button>
			</form>
		);
	}
}
export default ToDoAddForm;