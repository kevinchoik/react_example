import React from 'react';

class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	clickHandler(event) {
		event.preventDefault();
		this.props.xClick();
	}

	render() {
		return (<li>
			<button className='btn btn-danger del-btn' onClick={event => this.clickHandler(event)}>&times;</button>
			{this.props.task.completed ? <strike>{this.props.task.taskText}</strike> : this.props.task.taskText}
		</li>);
	}
}

export default Todo;
