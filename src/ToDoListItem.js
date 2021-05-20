import React, { Component } from 'react'

class ListItem extends Component {
  handleItemClick = (e) => {
		const { onItemClick } = this.props;
		onItemClick(e.target.id);
	}

	render() {
		const {
			children,
			id,
			status,
		} = this.props;
	return(
			<li
				id={id}
				onClick={this.handleItemClick}
				data-status={status}
				style={
                  status ? 
                  { textDecoration: 'line-through' } : 
                  { textDecoration: 'none' }
                }
			>
				{children}
			</li>
		);
	}
}

export default ListItem