import React from 'react';

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

export default InputLine;
