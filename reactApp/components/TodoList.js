import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<ul>
			{this.props.todos.map(data => <Todo task={data} />)}
		</ul>);
	}
}

export default TodoList;
