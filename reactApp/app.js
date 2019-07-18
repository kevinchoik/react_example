import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ['A', 'BBB', 'CCCCC lmao'];

class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<ul>
			{dummyData.map(data => <Todo task={data} />)}
		</ul>)
	}
}

class Todo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<li>
			<button>&times;</button>
			{this.props.task}
		</li>)
	}
}

ReactDOM.render(<TodoList/>, document.getElementById('root'));
