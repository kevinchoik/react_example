import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

const dummyData = [{
	taskText: 'A',
	completed: false
}, {
	taskText: 'BBB',
	completed: false
}, {
	taskText: 'CCCC lmao',
	completed: true
}];

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
	}

	componentDidMount() {
		this.setState({ todos: dummyData });
	}

	render() {
		return (<div>
			<InputLine/>
			<TodoList todos={this.state.todos}/>
		</div>);
	}
}

export default TodoApp;
