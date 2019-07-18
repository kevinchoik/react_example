import React from 'react';

class InputLine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			typedText: ''
		}
	}

	submitHandler(event) {
		event.preventDefault();
		if (this.state.typedText) {
			this.props.submit(this.state.typedText);
			this.setState({ typedText: '' });
		}	
	}

	typeHandler(event) {
		this.setState({ typedText: event.target.value });
	}

	render() {
		return (<form>
			<input className='form-control inline todo-input' type='text' placeholder='To do...' onChange={event => this.typeHandler(event)} value={this.state.typedText}/>
			<button className='btn btn-primary inline' onClick={event => this.submitHandler(event)}>Add To Do</button>
		</form>);
	}
}

export default InputLine;
