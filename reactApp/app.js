import React from 'react';
import ReactDOM from 'react-dom';

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

class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<ul>
			{dummyData.map(data => <Todo task={data} />)}
		</ul>);
	}
}

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

class InputLine extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<form>
			<input className='form-control inline todo-input' type='text' placeholder='To do...'/>
			<button className='btn btn-primary inline'>Add To Do</button>
		</form>);
	}
}

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<div>
			<InputLine/>
			<TodoList/>
		</div>);
	}
}

ReactDOM.render(<TodoApp/>, document.getElementById('root'));
