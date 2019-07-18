import React from 'react';

class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<li>
			<button className='btn btn-danger del-btn'>&times;</button>
			{this.props.task.completed ? <strike>{this.props.task.taskText}</strike> : this.props.task.taskText}
		</li>);
	}
}

export default Todo;
