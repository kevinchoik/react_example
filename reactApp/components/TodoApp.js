import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import axios from 'axios';

const dbUrl = 'http://localhost:3000/db';

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
	}

	componentDidMount() {
		axios.get(dbUrl + '/all')
		.then(response => {
			this.setState({ todos: response.data });
		})
		.catch(err => console.log(err));
	}

	addTodo(task) {
		axios.post(dbUrl + '/add', { task })
		.then(response => {
			this.setState({ todos: this.state.todos.concat(response.data) });
		})
		.catch(err => console.log(err));
	}

	removeTodo(id) {
		axios.post(dbUrl + '/remove', { id })
		.then(response => {
			this.setState({
				todos: this.state.todos.filter(item => {
					return !(item._id === id);
				})
			});
		})
		.catch(err => console.log(err));
	}

	strike(id) {
		axios.post(dbUrl + '/toggle', { id })
		.then(response => {
			this.setState({
				todos: this.state.todos.map(item => {
					if (item._id === id) {
						let itemCopy = {...item};
						itemCopy.completed = response.data.completed;
						return itemCopy;
					} else {
						return item;
					}
				})
			});
		})
		.catch(err => console.log(err));
	}

	render() {
		return (<div className='todo-app-wrapper'>
			<InputLine submit={task => this.addTodo(task)}/>
			<TodoList todos={this.state.todos} xClick={id => this.removeTodo(id)} todoClick={id => this.strike(id)}/>
		</div>);
	}
}

export default TodoApp;
