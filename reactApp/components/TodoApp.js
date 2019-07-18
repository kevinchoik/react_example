import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import axios from 'axios';

const dbUrl = 'http://localhost:3000/db';

const dummyData = [{
	task: 'A',
	completed: false
}, {
	task: 'BBB',
	completed: false
}, {
	task: 'CCCC lmao',
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

	addTodo(task) {
		axios.post((dbUrl + '/add'), { task })
		.then(response => {
			this.setState({ todos: this.state.todos.concat(response.data) });
		})
		.catch(err => console.log(err));
	}

	removeTodo(index) {
		dummyData.splice(index, 1);
		this.setState({ todos: dummyData });
	}

	strike(index) {
		dummyData[index].completed = !dummyData[index].completed;
		this.setState({ todos: dummyData });
	}

	render() {
		return (<div>
			<InputLine submit={task => this.addTodo(task)}/>
			<TodoList todos={this.state.todos} xClick={index => this.removeTodo(index)} todoClick={index => this.strike(index)}/>
		</div>);
	}
}

export default TodoApp;
