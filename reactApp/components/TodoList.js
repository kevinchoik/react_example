import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<ul>
			{this.props.todos.map((data, index) => <Todo task={data} xClick={() => this.props.xClick(index)}/>)}
		</ul>);
	}
}

export default TodoList;
