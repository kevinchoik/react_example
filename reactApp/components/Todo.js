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
			<div className='todo-text' onClick={() => this.props.todoClick()}>
				{this.props.task.completed ? <strike>{this.props.task.task}</strike> : this.props.task.task}
			</div>
		</li>);
	}
}

export default Todo;
