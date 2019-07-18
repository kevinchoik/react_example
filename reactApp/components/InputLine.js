import React from 'react';

class InputLine extends React.Component {
	constructor(props) {
		super(props);
	}

	clickHandler(event) {
		event.preventDefault();
		this.props.submit('Test Task');
	}

	render() {
		return (<form>
			<input className='form-control inline todo-input' type='text' placeholder='To do...'/>
			<button className='btn btn-primary inline' onClick={event => this.clickHandler(event)}>Add To Do</button>
		</form>);
	}
}

export default InputLine;
