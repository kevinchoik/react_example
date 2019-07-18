import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<ul className='todo-list-wrapper'>
			{this.props.todos.map(data => <Todo key={data._id} task={data} xClick={() => this.props.xClick(data._id)} todoClick={() => this.props.todoClick(data._id)}/>)}
		</ul>);
	}
}

export default TodoList;
