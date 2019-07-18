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

	addTodo(taskText) {
		dummyData.push({
			taskText,
			completed: false
		});
		console.log(dummyData);
		this.setState({ todos: dummyData });
	}

	render() {
		return (<div>
			<InputLine submit={task => this.addTodo(task)}/>
			<TodoList todos={this.state.todos}/>
		</div>);
	}
}

export default TodoApp;